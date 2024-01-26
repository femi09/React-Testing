import React from "react";
import { render, screen } from "@testing-library/react";
import { PersonPage } from "./PersonPage";

test("Should render loading indicator when data is loading", () => {
  render(<PersonPage id={0} />);
  expect(screen.getByText("Loading ...")).toBeInTheDocument()
});

test("Should render person name when data has loaded", async () => {
    render(<PersonPage id={0} />);
    expect(await screen.findByText("Herman Vandervort", undefined, {timeout:5000})).toBeInTheDocument();
  });

  // test("Should not initially render person name", () => {
  //   render(<PersonPage id={0} />);
  //   expect(screen.getByText("Herman Vandervort")).not.toBeInTheDocument();
  // });
