import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  it('contains 2 labels, 2 inputs, and 1 button', () => {
    render(<Login />);
    
    // Check for labels
    const emailLabel = screen.getByLabelText(/Email/i);
    const passwordLabel = screen.getByLabelText(/Password/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();

    // Check for inputs
    const emailInput = screen.getByPlaceholderText(/Enter Email/i);
    const passwordInput = screen.getByPlaceholderText(/Enter Password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    // Check for button
    const buttonElement = screen.getByRole('button', { name: /OK/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('focuses the email input when the email label is clicked', () => {
    render(<Login />);
    
    const emailLabel = screen.getByLabelText(/Email/i);
    const emailInput = screen.getByPlaceholderText(/Enter Email/i);

    fireEvent.click(emailLabel);
    expect(emailInput).toHaveFocus();
  });
});