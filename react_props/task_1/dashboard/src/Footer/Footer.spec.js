import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders the footer with the correct copyright text', () => {
    render(<Footer />);
    
    // Check if the footer text is rendered
    const footerElement = screen.getByText(/Copyright \d{4} - Holberton School/i);
    expect(footerElement).toBeInTheDocument();
  });
});