import { create } from 'zustand';

interface ClarityState {
  jsonInput: string;
  setJsonInput: (json: string) => void;
}

export const useClarityStore = create<ClarityState>((set) => ({
  jsonInput: '',
  setJsonInput: (json) => set({ jsonInput: json }),
}));
