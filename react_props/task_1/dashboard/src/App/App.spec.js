import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the Header component', () => {
    render(<App />);
    const headerElement = screen.getByRole('heading', { name: /School dashboard/i });
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the Login component', () => {
    render(<App />);
    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    render(<App />);
    const currentYear = new Date().getFullYear();
    const footerElement = screen.getByText(`Copyright ${currentYear} - Holberton School`);
    expect(footerElement).toBeInTheDocument();
  });

  it('renders the Notifications component', () => {
    render(<App />);
    const notificationsElement = screen.getByTestId('notifications');
    expect(notificationsElement).toBeInTheDocument();
  });
});