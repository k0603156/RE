import React from "react";
import { mount, shallow, render } from "enzyme";
import Button from "../Components/atoms/Button";

describe("Button", () => {
  let button: any = null;

  it("renders correctly", () => {
    button = mount(<Button>Button</Button>);
  });

  it("matches snapshot", () => {
    expect(button).toMatchSnapshot();
  });

  it("span contain text 'Button'", () => {
    expect(button.contains("Button")).toBe(true);
  });
});
