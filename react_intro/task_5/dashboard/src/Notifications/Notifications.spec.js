import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('should render the notifications title', () => {
    render(<Notifications />);
    const titleElement = screen.getByText(/Here is the list of notifications/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the close button', () => {
    render(<Notifications />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('should render three list items', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });

  it('should log "Close button has been clicked" when the close button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<Notifications />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    
    fireEvent.click(closeButton);
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');

    consoleSpy.mockRestore();
  });
});
