import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('has blue color and default type when type is "default"', () => {
    render(<NotificationItem type="default" value="test" />);
    const li = screen.getByRole('listitem');
    expect(li).toHaveAttribute('data-notification-type', 'default');
    expect(li).toHaveStyle('color: blue');
  });

  it('has red color and urgent type when type is "urgent"', () => {
    render(<NotificationItem type="urgent" value="test" />);
    const li = screen.getByRole('listitem');
    expect(li).toHaveAttribute('data-notification-type', 'urgent');
    expect(li).toHaveStyle('color: red');
  });
});