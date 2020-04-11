import React, { useState, useRef } from "react";
import styled from "styled-components";
interface IProps {
  className?: string;
  children: React.ReactNode;
}
const Carousel = styled((props: IProps) => {
  return <div className={props.className}>{props.children}</div>;
})`
  width: 80%;
  overflow-x: hidden;
`;

const CarouselWrapper = styled((props) => {
  return <ul className={props.className}>{props.children}</ul>;
})`
  height: 200px;
  width: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0;
  margin-left: ${(props) => props.currentPage * -80 + "%"};
  margin-right: ${(props) => props.currentPage * 80 + "%"};
  transition-duration: 1s;
`;

const CarouselItem = styled((props, key) => {
  return (
    <li className={props.className} key={props.id}>
      <h2>{props.title}</h2>
      <div>{props.user.userName}</div>
      <div> {props.updatedAt}</div>
      <div> {props.body}</div>
    </li>
  );
})({
  height: "inherit",
  width: "80%",
  listStyle: "none",
});

const CarouselFooter = styled(
  <T extends Array<any>>(props: {
    className?: string;
    dataList: T;
    currentPage: number;
    setCurrentPage: (num: number) => void;
  }) => (
    <ul className={props.className}>
      {props.dataList.map((data, index) => {
        const active = props.currentPage === index ? "active" : "";
        return (
          <li className={active} key={index}>
            <a onClick={(e) => props.setCurrentPage(index)}>
              {String(index).padStart(2, "0")}
            </a>
          </li>
        );
      })}
    </ul>
  )
)`
  display: flex;
  width: 20%;
  margin: auto;
  li {
    flex: 1;
    list-style: none;
    text-align: center;
    cursor: pointer;
    &.active {
      font-weight: 600;
    }
    transition-duration: 1s;
  }
`;

export default <T extends Array<any>>(props: { dataList: T }) => {
  const [current, setCurrent] = useState(0);
  const setPage = (num: number) => {
    setCurrent(num);
  };
  return (
    <Carousel>
      <CarouselWrapper currentPage={current}>
        {props.dataList.map((data, index) => (
          <CarouselItem key={index} {...data} />
        ))}
      </CarouselWrapper>
      <CarouselFooter
        dataList={props.dataList}
        currentPage={current}
        setCurrentPage={setPage}
      />
    </Carousel>
  );
};
