import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders the header with the logo and title', () => {
    render(<Header />);
    
    // Check if the logo is rendered
    const logoElement = screen.getByAltText('holberton logo');
    expect(logoElement).toBeInTheDocument();

    // Check if the title is rendered
    const titleElement = screen.getByRole('heading', { name: /School dashboard/i });
    expect(titleElement).toBeInTheDocument();
  });
});