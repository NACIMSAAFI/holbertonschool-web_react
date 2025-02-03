import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the Notifications component', () => {
    render(<App />);
    
    // Check if the Notifications component is rendered
    const notificationsElement = screen.getByTestId('notifications');
    expect(notificationsElement).toBeInTheDocument();
  });

  it('renders the Header component', () => {
    render(<App />);
    
    // Check if the Header component is rendered
    const headerElement = screen.getByRole('heading', { name: /School dashboard/i });
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the Login component', () => {
    render(<App />);
    
    // Check if the Login component is rendered
    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    render(<App />);
    
    // Check if the Footer component is rendered
    const footerElement = screen.getByText(/Copyright \d{4} - Holberton School/i);
    expect(footerElement).toBeInTheDocument();
  });
});