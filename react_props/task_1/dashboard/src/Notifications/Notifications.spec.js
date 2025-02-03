import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('renders the notifications title', () => {
    render(<Notifications />);
    const titleElement = screen.getByText(/Here is the list of notifications/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the close button', () => {
    render(<Notifications />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('renders three list items', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });

  it('logs "Close button has been clicked" when the close button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<Notifications />);
    const closeButton = screen.getByRole('button', { name: /close/i });

    fireEvent.click(closeButton);
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');

    consoleSpy.mockRestore();
  });

  it('renders the Notifications component with the correct data-testid', () => {
    render(<Notifications />);
    const notificationsElement = screen.getByTestId('notifications');
    expect(notificationsElement).toBeInTheDocument();
  });
});
