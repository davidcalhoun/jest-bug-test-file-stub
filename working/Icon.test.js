import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Icon from "./Icon";

describe("has a className", () => {
  test("ReactDOM rendering", () => {
    const container = document.createElement("div");
    ReactDOM.render(<Icon />, container);
    expect(container.firstChild.className).toBe("myLogo");
  });

  test("react testing library rendering", () => {
    const { container } = render(<Icon />);
    render(<Icon />);
    expect(container.firstChild.className).toBe("myLogo");
  });
});
