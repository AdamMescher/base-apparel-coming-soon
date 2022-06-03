import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import App from "./App";

expect.extend(toHaveNoViolations);

describe("App Component", () => {
  it("Should render without axe a11y errors", async () => {
    render(<App />);
    expect(await axe(screen.getByTestId("app"))).toHaveNoViolations();
  });
});
