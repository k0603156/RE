import React from "react";
import { mount, shallow, render } from "enzyme";
import { SimpleButton } from "../components/Button";


describe("<Button />", () => {
  let button: any = null;

  it("renders correctly", () => {
    button = mount(<SimpleButton />);
  });

  it("matches snapshot", () => {
    expect(button).toMatchSnapshot();
  });

  it("span contain text 'btn'", () => {
    const btn = button.find("span");
    expect(btn.contains("btn")).toBe(true);
  });
});
