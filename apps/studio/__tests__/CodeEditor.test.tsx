import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CodeEditor } from '@/app/components/CodeEditor';
import { useClarityStore } from '@/lib/state-manager';

// Mock the Zustand store
const setCodeInput = vi.fn();
useClarityStore.setState({
  codeInput: '',
  setCodeInput,
});

describe('CodeEditor', () => {
  it('renders a textarea', () => {
    const { getByRole } = render(<CodeEditor />);
    const textarea = getByRole('textbox');
    expect(textarea).toBeInTheDocument();
  });

  it('calls setCodeInput on change', () => {
    const { getByRole } = render(<CodeEditor />);
    const textarea = getByRole('textbox');
    fireEvent.change(textarea, { target: { value: '<h1>Hello</h1>' } });
    expect(setCodeInput).toHaveBeenCalledWith('<h1>Hello</h1>');
  });
});
