'use client';

import { useClarityStore } from '@/lib/state-manager';

export function CodeEditor() {
  const { codeInput, setCodeInput } = useClarityStore();

  return (
    <div className="h-full m-2">
      <textarea
        className="w-full h-full bg-zinc-900 text-zinc-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={codeInput}
        onChange={(e) => setCodeInput(e.target.value)}
        placeholder="Enter your HTML, CSS, and JavaScript here..."
      />
    </div>
  );
}
