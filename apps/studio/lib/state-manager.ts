import { create } from 'zustand';

interface ClarityState {
  jsonInput: string;
  setJsonInput: (json: string) => void;
  codeInput: string;
  setCodeInput: (code: string) => void;
}

export const useClarityStore = create<ClarityState>((set) => ({
  jsonInput: '',
  setJsonInput: (json) => set({ jsonInput: json }),
  codeInput: '',
  setCodeInput: (code) => set({ codeInput: code }),
}));
