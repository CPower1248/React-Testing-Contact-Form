import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import ContactForm from "./ContactForm"

test ("Renders ContactForm withour errors", () => {
    render(<ContactForm />)
})

test ("User can fill out and submit form", async () => {
    // Arrange
    render(<ContactForm />)

    // Act
    const firstNameInput = screen.getByPlaceholderText(/edd/i)
    const lastNameInput = screen.getByPlaceholderText(/burke/i)
    const emailInput = screen.getByTestId(/email/i)
    const messageInput = screen.getByTestId(/message/i)

    userEvent.type(firstNameInput, "Corey")
    userEvent.type(lastNameInput, "Power")
    userEvent.type(emailInput, "CPower1248@gmail.com")
    userEvent.type(messageInput, "Hello World!")

    const button = screen.getByTestId("submit")

    userEvent.click(button)

    //Assert
    const output = await screen.findByText(/firstName/)
    expect(output).toBeInTheDocument()
})
