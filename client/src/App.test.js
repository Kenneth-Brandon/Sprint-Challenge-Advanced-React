import React from "react";
import { render, cleanup } from "@testing-library/react";

import ReactDOM from "react-dom";
import App from "./App";
import UserCard from "./components/UserCard";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders userList in the App", () => {
  const { getByTestId } = render(<App />);

  getByTestId("userList");
});

test("Players are defined", () => {
  const players = <UserCard />;
  expect(players).toBeDefined();
  expect(players).not.toBeUndefined();
  expect(players).not.toBeFalsy();
});

test("Home page title works", () => {
  const { getByText } = render(<App />);
  getByText(/Women's World Cup Players/i);
});
