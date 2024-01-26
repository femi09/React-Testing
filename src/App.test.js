import React from "react";
import { render, screen } from "@testing-library/react";
import App  from "./App";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";


// test("When 'Add new person' clicked on HomePage, should go to NewPersonPage", async () => {
//   const user = userEvent.setup();
//   render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   );
//   await user.click(screen.getByText("Add new person"));

//   expect(await screen.findByText(/New person/)).toBeInTheDocument();
// });

// test("When Home is clicked on NewPersonPage, should render HomePage", async () => {
//     const user = userEvent.setup();
//     render(
//       <MemoryRouter initialEntries={["/newperson"]}>
//         <App />
//       </MemoryRouter>
//     );

//     await user.click(screen.getByText("Home"));

//     expect(await screen.findByText(/My App/)).toBeInTheDocument();
//   });

  test("When route is not known, should render not found message", async () => {
    render(
      <MemoryRouter initialEntries={["/unknown"]}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByText(/not found/)).toBeInTheDocument();
  });

//   React Router routes can be tested in the app by using MemoryRouter as the router. The initial route can be defined in MemoryRouter using its initialEntries prop.