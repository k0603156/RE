/** @tsx tsx */
import React from "react";
import Component from "./index";

export default {
  title: "ImageDndZone",
  parameters: {
    componentSubtitle: "ImageDndZone",
  },
};

export const ImageDndZone = () => {
  return (
    <div style={{ width: "500px" }}>
      <Component />
    </div>
  );
};
ImageDndZone.story = {
  name: "default",
};
