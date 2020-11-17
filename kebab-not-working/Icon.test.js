import React from "react";
import { render } from "@testing-library/react";
import Icon from "./Icon";

test("has a className", () => {
  const { container } = render(<Icon />);
  expect(container.firstChild.className).toBe("myLogo");
  //expect(element.className).toBe('dark');
});
