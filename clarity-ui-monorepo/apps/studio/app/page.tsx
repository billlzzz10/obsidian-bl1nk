'use client';

import { Toolbar } from './components/Toolbar';
import { CodeEditor } from './components/CodeEditor';
import { Preview } from './components/Preview';
import { useClarityStore } from '../lib/state-manager';
import { useEffect } from 'react';

export default function StudioPage() {
  // Task 3.3: Instantiate the hook to verify its availability
  const storeIsReady = useClarityStore((state) => state.jsonInput !== undefined);

  useEffect(() => {
    if (storeIsReady) {
      console.log("Clarity UI Studio: Zustand store initialized successfully.");
    }
  }, [storeIsReady]);

  return (
    <main className="h-screen w-screen grid grid-cols-2 bg-zinc-900 text-white font-sans">
      {/* Left Panel */}
      <div className="flex flex-col h-screen border-r border-zinc-800">
        <Toolbar />
        <div className="flex-grow p-2">
          <CodeEditor />
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-col h-screen p-2">
        <Preview />
      </div>
    </main>
  );
}
