import { render, screen } from '@testing-library/react';
import App from './App.jsx';

describe("App component", () => {
    it("is the header rendered", () => {
        render(<App />);
        const h1elem = screen.getByRole("heading");
        expect(h1elem).toBeInTheDocument();
    });

    it("are the paragraphs correct", () => {
        render(<App />);
        const Para1 = screen.getByText("Login to access the full dashboard");
        const Para2 = screen.getByText(/Copyright 2025 - Holberton School/i); // Updated text match
        expect(Para1).toBeInTheDocument();
        expect(Para2).toBeInTheDocument();
    });

    it("is the image rendered", () => {
        render(<App />);
        const img = screen.getByAltText("holberton logo");
        expect(img).toBeInTheDocument();
    });

    it("are the input elements renderd", () => {
        render(<App />)
        const allInputs = screen.getAllByRole("textbox")
        allInputs.map((elem) => {expect(elem).toBeInTheDocument()})
    })
    
    it('should render 2 label elements with the text Email and Password', () => {
        render(<App />);
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();  // Added case-insensitive regex match
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument(); // Added case-insensitive regex match
    });

    it('should render a button with the text "OK"', () => {
        render(<App />);
        const button = screen.getByRole('button', { name: /OK/i }); // Added regex for case-insensitive match
        expect(button).toBeInTheDocument();
    });
});
