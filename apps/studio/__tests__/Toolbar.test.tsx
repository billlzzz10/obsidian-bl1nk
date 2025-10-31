import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Toolbar } from '@/app/components/Toolbar';

describe('Toolbar', () => {
  it('renders the logo', () => {
    const { getByAltText } = render(<Toolbar />);
    const logo = getByAltText('Clarity UI Studio Logo');
    expect(logo).toBeInTheDocument();
  });
});
