/** @tsx tsx */
import React from "react";
import { action } from "@storybook/addon-actions";
import Component from "./index";

export default {
  title: "HashtagInput",
  parameters: {
    componentSubtitle: "HashtagInput",
  },
};

export const HashtagInput = () => {
  return <Component />;
};
HashtagInput.story = {
  name: "default",
};
