import React from "react";
import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "./ErrorMessage";

test("should render correct messqge when message prop is passed", () => {
    render(<ErrorMessage message="test" />);
    expect(screen.getByText('test')).toBeInTheDocument()
})