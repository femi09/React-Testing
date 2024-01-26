import React from "react";
import {render, screen} from "@testing-library/react";
import { EditPersonName } from "./EditPersonName";

// ByLabelText: retrieves an input element associated with a label containing particular text
test("firstName contains correct default value", async () => {
    render(<EditPersonName id={0}/>);
    const input = await screen.findByLabelText("First name")
    expect(input).toHaveValue("Herman")
});

// ByPlaceholderText: retrieves an input element by its  placeholder text
test("firstName contains correct default value", async () => {
    render(<EditPersonName id={0}/>);
    const input = await screen.findByPlaceholderText("Enter first name")
    expect(input).toHaveValue("Herman")
});

// ByDisplayValue: This finds the input element with the value we pass to it. 
//This is only useful when the input we want to select has a value.
test("firstName contains correct default value", async () => {
    render(<EditPersonName id={0}/>);
    const input = await screen.findByDisplayValue("Herman")
    expect(input).toBeInTheDocument()
});

// ByTestId: selects an inpiut element by it's test id
test("firstName contains correct default value", async () => {
    render(<EditPersonName id={0}/>);
    const input = await screen.findByDisplayValue("Herman")
    expect(await screen.findByTestId("firstName")).toHaveValue("Herman");
});

// The byLabelText function is the best query type for form fields. 
//If an input isn’t associated with a label, then doing so can improve the accessibility of the app.


// The byTestId function can work on any DOM element 
//but requires a data-testid attribute to be added to the DOM element