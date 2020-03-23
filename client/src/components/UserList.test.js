import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import UserList from "./UserList";

const mockData = [{ name: "Kenneth", country: "USA", searches: 100 }];

it("renders a dark mode button", () => {
  const { getByTestId } = render(<UserList userList={mockData} />);

  getByTestId("dark-mode-btn");
});

it("renders with light mode default", () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId("dark-mode-btn")).toBeInTheDocument();
  expect(getByTestId("userList")).toHaveStyle("background-color: white");
});

it("toggles the dark mode", () => {
  const { getByTestId } = render(<UserList userList={mockData} />);
  const toggleButton = getByTestId("dark-mode-btn");

  fireEvent.click(toggleButton);
  expect(getByTestId("userList")).toHaveStyle("background-color: black");

  fireEvent.click(toggleButton);
  expect(getByTestId("userList")).toHaveStyle("background-color: white");
});
