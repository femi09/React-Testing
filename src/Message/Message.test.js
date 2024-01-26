import React from "react";
import  {render, screen}  from '@testing-library/react'
import { Message } from './Message';

// getByAltText
test("Should render correct image when type is error", () => {
    render(<Message message="test" type="error" />);
    expect(screen.getByAltText("cross")).toBeInTheDocument();
});

// getByTitle: finds an element that has a title
test("Should render correct image when type is error", () => {
    render(<Message message="test" type="error" />);
    expect(screen.getByTitle("cross")).toBeInTheDocument();
  });

// getByRole: finds an element with a particular ARIA role
test("Should render correct image when type is error", () => {
    const { container } = render(<Message message="test" type="error" />);
    expect(screen.getByTitle("cross")).toBeInTheDocument();
    // logRoles(container);
  });