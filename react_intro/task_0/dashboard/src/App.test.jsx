import {render, screen} from '@testing-library/react'
import App from './App.jsx'

describe("App component", () => {
    it("is the header rendered", () => {
        render(<App />)
        const h1elem = screen.getByRole("heading")
        expect(h1elem).toBeInTheDocument()
    })
    it("are the paragraphs correct", () => {
        render(<App />)
        const Para1 = screen.getByText("Login to access the full dashboard")
        const Para2 = screen.getByText("Copyright 2024 - holberton School")
        expect(Para1).toBeInTheDocument()
        expect(Para2).toBeInTheDocument()

    })
    it("is the image rendred", () => {
        render(<App />)
        const img = screen.getByAltText("holberton logo")
        expect(img).toBeInTheDocument()
    })
})