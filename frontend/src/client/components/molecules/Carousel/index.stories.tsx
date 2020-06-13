/** @tsx tsx */
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Component from "./index";
import { CarouselItem as ComponentItem } from "client/components/molecules";

export default {
  title: "Carousel",
  parameters: {
    componentSubtitle: "Carousel",
  },
};

const items = [
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
export const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const onClickIdx = (idx: number) => setCurrent(idx);

  return (
    <BrowserRouter>
      <Component
        items={items}
        current={current}
        onClickIdx={onClickIdx}
        render={(item, index) => <ComponentItem key={index} item={item} />}
      />
    </BrowserRouter>
  );
};
Carousel.story = {
  name: "default",
};
