'use client';

import { useEffect, useState } from 'react';
import { useClarityStore } from '@/lib/state-manager';
import { process } from '@/lib/mcp';

export function Preview() {
  const { codeInput } = useClarityStore();
  const [sanitizedCode, setSanitizedCode] = useState('');

  useEffect(() => {
    const processCode = async () => {
      const processedCode = await process(codeInput);
      setSanitizedCode(processedCode);
    };

    processCode();
  }, [codeInput]);

  return (
    <div className="h-full m-2">
      <iframe
        className="w-full h-full bg-white rounded-lg"
        srcDoc={sanitizedCode}
        title="Preview"
        sandbox="allow-scripts"
      />
    </div>
  );
}
