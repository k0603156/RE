/** @tsx tsx */
import React from "react";
import { action } from "@storybook/addon-actions";
import Component from "./index";
export default {
  title: "Carousel",
  parameters: {
    componentSubtitle: "Carousel",
  },
};

export const Carousel = () => {
  const dataList = [
    { title: "WE", body: "we" },
    { title: "WE2", body: "we2" },
    { title: "WE3", body: "we3" },
    { title: "WE4", body: "we4" },
  ];
  return <Component<typeof dataList> dataList={dataList} />;
};
Carousel.story = {
  name: "default",
};
