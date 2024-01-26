import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ContactForm } from "./ContactForm";
import userEvent from "@testing-library/user-event";

// using fireEvent
test("Clicking submit button without filling in form renders name validation error", async () => {

  render(<ContactForm />);

  const saveButton = screen.getByText("Save");

  fireEvent(saveButton, new MouseEvent('click'))

  expect(
    await screen.findByText("You must enter your name")
  ).toBeInTheDocument();
});

// using userEvent
test("Clicking submit button without filling in form renders name validation error", async () => {

    const user = userEvent.setup()
    render(<ContactForm />);
  
    const saveButton = screen.getByText("Save");
  
    await user.click(saveButton)
  
    expect(
      await screen.findByText("You must enter your name")
    ).toBeInTheDocument();
  });

// use user-event over fire event*

test("Clicking Save button when form is completed in should render a success message", async () => {
    const user = userEvent.setup(); 
    render(<ContactForm />);

    screen.getByLabelText("Name").focus();
    await user.keyboard('test');

    screen.getByLabelText("Message").focus();
    await user.keyboard('test');

    await user.click(screen.getByText("Save"))

    expect(await screen.findByText("Successfully saved")).toBeInTheDocument();
  });

// submiting the form using the enter key
  test("Pressing Enter when form is completed in should render a success message", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
  
    screen.getByLabelText("Message").focus();
    await user.keyboard("test");
    screen.getByLabelText("Name").focus();
    await user.keyboard("test{enter}");
    
    expect(await screen.findByText("Successfully saved")).toBeInTheDocument();
  });
  

// selecting an option in a select element
test("Clicking Save button when form is completed in should render a success message", async () => {
    const user = userEvent.setup(); 
    render(<ContactForm />);

    screen.getByLabelText("Name").focus();
    await user.keyboard('test');

    screen.getByLabelText("Message").focus();
    await user.keyboard('test');

    // selecting from a dropdown
    // the select option takes in the dropdown element as the first parameter
    // and the option has the second
    // await user.selectOptions(
    //     screen.getByLabelText("Department"),
    //     screen.getByText("Support")
    //   );

    // for a multiselect
    await user.selectOptions(
        screen.getByLabelText("Department"),
        [screen.getByText("Support"), screen.getByText("Finance")]
      );


    await user.click(screen.getByText("Save"))

    expect(await screen.findByText("Successfully saved")).toBeInTheDocument();
  });