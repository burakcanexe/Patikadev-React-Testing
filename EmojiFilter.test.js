import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("Emoji Filter Test", () => {
    render(<App />);
    const inputText = screen.getByText("Joy");
    expect(inputText).toBeInTheDocument("Joy");
});