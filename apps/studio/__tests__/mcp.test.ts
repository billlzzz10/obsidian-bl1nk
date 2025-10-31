import { vi, describe, it, expect, beforeEach } from 'vitest';
import { process } from '@/lib/mcp';
import * as jsonbin from '@/lib/jsonbin';

// Mock the jsonbin module
vi.mock('@/lib/jsonbin', () => ({
  logErrorToBin: vi.fn(),
}));

describe('Guardian (MCP)', () => {
  beforeEach(() => {
    // Reset the mock before each test
    vi.clearAllMocks();
  });

  it('should not change safe code', async () => {
    const safeCode = '<h1>Hello</h1><p>This is safe.</p>';
    const processedCode = await process(safeCode);
    expect(processedCode).toBe(safeCode);
    expect(jsonbin.logErrorToBin).not.toHaveBeenCalled();
  });

  it('should remove script tags and log the error', async () => {
    const unsafeCode = '<h1>Hello</h1><script>alert("xss")</script>';
    const expectedCode = '<h1>Hello</h1>';
    const processedCode = await process(unsafeCode);
    expect(processedCode).toBe(expectedCode);
    expect(jsonbin.logErrorToBin).toHaveBeenCalledOnce();
    expect(jsonbin.logErrorToBin).toHaveBeenCalledWith(
      expect.objectContaining({
        originalCode: unsafeCode,
        sanitizedCode: expectedCode,
        errorType: 'Unsafe HTML detected',
      })
    );
  });

  it('should remove iframe tags and log the error', async () => {
    const unsafeCode = '<iframe src="http://example.com"></iframe><p>Some text</p>';
    const expectedCode = '<p>Some text</p>';
    const processedCode = await process(unsafeCode);
    expect(processedCode).toBe(expectedCode);
    expect(jsonbin.logErrorToBin).toHaveBeenCalledOnce();
  });

  it('should handle code with multiple unsafe tags', async () => {
    const unsafeCode = '<script>alert(1)</script><p>test</p><iframe src=""></iframe>';
    const expectedCode = '<p>test</p>';
    const processedCode = await process(unsafeCode);
    expect(processedCode).toBe(expectedCode);
    expect(jsonbin.logErrorToBin).toHaveBeenCalledOnce();
  });
});
