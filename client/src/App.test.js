import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import PlayerCard from "./components/playerCard";

// tests is app renders right

test("renders app correctly", () => {
  render(<App />);
});
