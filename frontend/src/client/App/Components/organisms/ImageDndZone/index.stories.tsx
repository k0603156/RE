/** @tsx tsx */
import React from "react";
import { action } from "@storybook/addon-actions";
import Component from "./index";

export default {
  title: "ImageDndZone",
  parameters: {
    componentSubtitle: "ImageDndZone",
  },
};

export const ImageDndZone = () => {
  return <Component />;
};
ImageDndZone.story = {
  name: "default",
};
