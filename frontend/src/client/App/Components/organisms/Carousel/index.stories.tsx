/** @tsx tsx */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { action } from "@storybook/addon-actions";
import { Carousel as Component, CarouselItem as ComponentItem } from "./index";

export default {
  title: "Carousel",
  parameters: {
    componentSubtitle: "Carousel",
  },
};

export const Carousel = () => {
  const dataList = [
    {
      id: 1,
      title: "Title1",
      readcount: 0,
      updatedAt: "2020:04:04",
      user: { userName: "user1" },
      hashtags: [{ name: "tag1" }],
    },
    {
      id: 2,
      title: "Title2",
      readcount: 0,
      updatedAt: "2020:04:04",
      user: { userName: "user2" },
      hashtags: [{ name: "tag1" }],
    },
    {
      id: 3,
      title: "Title3",
      readcount: 0,
      updatedAt: "2020:04:04",
      user: { userName: "user3" },
      hashtags: [{ name: "tag1" }],
    },
    {
      id: 4,
      title: "Title4",
      readcount: 0,
      updatedAt: "2020:04:04",
      user: { userName: "user4" },
      hashtags: [{ name: "tag1" }],
    },
  ];
  return (
    <BrowserRouter>
      <Component
        pageDataList={dataList}
        CarouselItem={(data, index) => (
          <ComponentItem key={index} length={dataList.length} data={data} />
        )}
      />
    </BrowserRouter>
  );
};
Carousel.story = {
  name: "default",
};
