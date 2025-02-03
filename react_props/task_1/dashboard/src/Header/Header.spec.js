import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('contains the Holberton logo', () => {
    render(<Header />);
    const logoElement = screen.getByAltText('holberton logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('contains the heading h1 element with the correct text', () => {
    render(<Header />);
    const headingElement = screen.getByRole('heading', { name: /School dashboard/i });
    expect(headingElement).toBeInTheDocument();
  });
});