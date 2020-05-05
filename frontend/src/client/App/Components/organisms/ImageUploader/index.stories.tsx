/** @tsx tsx */
import React from "react";
import { action } from "@storybook/addon-actions";
import Component from "./index";

export default {
  title: "ImageUploader",
  parameters: {
    componentSubtitle: "ImageUploader",
  },
};

export const ImageUploader = () => {
  return (
    <div style={{ width: "500px" }}>
      <Component />
    </div>
  );
};
ImageUploader.story = {
  name: "default",
};
