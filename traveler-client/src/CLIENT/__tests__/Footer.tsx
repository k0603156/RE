import React from "react";
import { mount, shallow, render } from "enzyme";
import Footer from "../components/Footer";

describe("Footer", () => {
  let footer: any = null;

  it("renders correctly", () => {
    footer = mount(<Footer />);
  });

  it("matches snapshot", () => {
    expect(footer).toMatchSnapshot();
  });

  it("contain text 'Footer'", () => {
    expect(footer.contains("Footer")).toBe(true);
  });
});
