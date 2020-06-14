import React from "react";
import styled from "styled-components";
import { useCarousel } from "client/lib/hooks/useCarousel";

export interface IProps {
  slides: Array<any>;
  interval?: number;
}
const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;
const CarouselContent = styled.div`
  flex: 1;
`;
const CarouselItem = styled.div`
  flex: 1;
`;
const CarouselIndicators = styled.ol`
  display: flex;
  justify-content: center;
  padding: 5px 0;
  li {
    padding: 0 5px;
    cursor: pointer;
    &.active {
      font-weight: 600;
    }
  }
`;
export default ({ slides, interval = 5000 }: IProps) => {
  const length = slides.length;
  const [active, setActive, handlers, style] = useCarousel(length, interval);

  return length > 0 ? (
    <Carousel>
      <CarouselContent {...handlers} style={style}>
        <CarouselItem>{slides[slides.length - 1]}</CarouselItem>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>{slide}</CarouselItem>
        ))}
        <CarouselItem>{slides[0]}</CarouselItem>
      </CarouselContent>
      <CarouselIndicators>
        {slides.map((_, index) => (
          <li
            onClick={() => setActive(index)}
            key={index}
            className={`${active === index ? "active" : ""}`}
          >
            {String(index).padStart(2, "0")}
          </li>
        ))}
      </CarouselIndicators>
    </Carousel>
  ) : null;
};
