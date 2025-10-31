import { render, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Preview } from '@/app/components/Preview';
import { useClarityStore } from '@/lib/state-manager';

describe('Preview', () => {
  it('renders an iframe with the correct srcDoc', async () => {
    // Set the initial state of the store for this test
    act(() => {
      useClarityStore.setState({ codeInput: '<h1>Hello Preview</h1>' });
    });

    const { findByTitle } = render(<Preview />);
    const iframe = await findByTitle('Preview') as HTMLIFrameElement;

    // We need to wait for the useEffect to run and update the srcDoc
    // A simple way to do this is to check for the content to be present.
    await new Promise(resolve => setTimeout(resolve, 100)); // allow time for async process

    expect(iframe).toBeInTheDocument();
    expect(iframe.srcdoc).toContain('<h1>Hello Preview</h1>');
  });
});
