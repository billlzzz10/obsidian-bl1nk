import { useClarityStore } from '@/lib/state-manager';
import { describe, it, expect } from 'vitest';
import { act } from '@testing-library/react';

describe('useClarityStore', () => {
  it('should set jsonInput', () => {
    act(() => {
      useClarityStore.getState().setJsonInput('{"key":"value"}');
    });
    expect(useClarityStore.getState().jsonInput).toBe('{"key":"value"}');
  });

  it('should set codeInput', () => {
    act(() => {
      useClarityStore.getState().setCodeInput('<h1>Hello</h1>');
    });
    expect(useClarityStore.getState().codeInput).toBe('<h1>Hello</h1>');
  });
});
