import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders the correct copyright text', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    const footerElement = screen.getByText(`Copyright ${currentYear} - Holberton School`);
    expect(footerElement).toBeInTheDocument();
  });
});