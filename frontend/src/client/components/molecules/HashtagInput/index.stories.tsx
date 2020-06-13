/** @tsx tsx */
import React, { useState } from "react";
import Component from "./index";

export default {
  title: "HashtagInput",
  parameters: {
    componentSubtitle: "HashtagInput",
  },
};

export const HashtagInput = () => {
  const [tags, setTags] = useState([{ name: "tag" }]);
  const setTagFunc = (value: any) => {
    setTags([...tags, value]);
  };
  return <Component tags={tags} setTags={setTagFunc} maxTags={5} />;
};
HashtagInput.story = {
  name: "default",
};
