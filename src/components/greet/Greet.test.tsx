import Greet from "./Greet";
import { render, screen } from "@testing-library/react";

describe("Greet component", () => {
  test("component renders correctly", () => {
    render(<Greet />); // render the component
    const textEl = screen.getByText(/Hello/);
    expect(textEl).toBeInTheDocument();
  });
  
  test("renders with a name", () => {
    render(<Greet name="Cameron" />);
    const textEl = screen.getByText(/hello cameron/i);
    expect(textEl).toBeInTheDocument();
  });
  
});
