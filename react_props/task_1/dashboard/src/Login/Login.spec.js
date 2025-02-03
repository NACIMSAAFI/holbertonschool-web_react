import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  it('renders the login form with email and password inputs', () => {
    render(<Login />);
    
    // Check if the email input is rendered
    const emailInput = screen.getByLabelText(/Email/i);
    expect(emailInput).toBeInTheDocument();

    // Check if the password input is rendered
    const passwordInput = screen.getByLabelText(/Password/i);
    expect(passwordInput).toBeInTheDocument();

    // Check if the submit button is rendered
    const buttonElement = screen.getByRole('button', { name: /OK/i });
    expect(buttonElement).toBeInTheDocument();
  });
});