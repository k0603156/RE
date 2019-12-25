import React from "react";
import { mount, shallow, render } from "enzyme";
import Button from "../components/Button";

const clickFn = jest.fn();

describe("<Button />", () => {
  let button: any = null;

  it("renders correctly", () => {
    button = mount(<Button />);
  });

  it("matches snapshot", () => {
    expect(button).toMatchSnapshot();
  });

  it("span contain text 'btn'", () => {
    const btn = button.find("span");
    expect(btn.contains("btn")).toBe(true);
  });
});
