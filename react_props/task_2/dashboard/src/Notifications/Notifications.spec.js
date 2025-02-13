import Notifications from './Notifications.jsx';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { v4 as uuidv4 } from 'uuid';

describe('Notifications Component Tests', () => {
  test("Testing if the paragraph text is correct", () => {
    render(<Notifications />);
    const p = screen.getByText(/Here is the list of notifications/i);
    expect(p).toBeInTheDocument();
  });

  test("Checking the existence of the button element", () => {
    render(<Notifications />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  test("Checking if the right text is logged when the button is clicked", async () => {
    render(<Notifications />);
    const spy = jest.spyOn(console, 'log');
    const btn = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(btn);
    expect(spy).toHaveBeenCalledWith("Close button has been clicked");
    spy.mockRestore();
  });

  test("Checking if the component renders the 3 li tags", () => {
    const mnotifications = [
      { 
        id: uuidv4(),  // Changed from 'key' to 'id'
        type: "default", 
        value: "New course available"
      },
      { 
        id: uuidv4(), 
        type: "urgent", 
        value: "New resume available"
      },
      { 
        id: uuidv4(), 
        type: "urgent", 
        html: { __html: "Urgent requirement - complete by EOD" } // Changed from value to html
      }
    ];

    // Corrected prop name from 'notifications' to 'listNotifications'
    render(<Notifications listNotifications={mnotifications} />);
    
    const litag1 = screen.getByText("New course available");
    const litag2 = screen.getByText("New resume available");
    const litag3 = screen.getByText(/Urgent requirement - complete by EOD/i); // Regex for HTML content
    
    expect(litag1).toBeInTheDocument();
    expect(litag2).toBeInTheDocument();
    expect(litag3).toBeInTheDocument();
  });
});