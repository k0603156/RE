import React, { useState, useRef } from "react";
import styled from "styled-components";
interface IProps {
  className?: string;
  children: React.ReactNode;
}
const Carousel = styled((props: IProps) => {
  return <div className={props.className}>{props.children}</div>;
})`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`;

const CarouselWrapper = styled((props) => {
  return <ul className={props.className}>{props.children}</ul>;
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  height: 200px;
  width: ${(props) => props.length * 80 + "%"};
  padding: 0;
  margin-left: ${(props) => props.currentPage * -80 + "%"};
  margin-right: ${(props) => props.currentPage * 80 + "%"};
  transition-duration: 1s;
`;

const CarouselItem = styled(({ length, key, ...props }) => {
  return (
    <li className={props.className} key={props.id}>
      <h2>{props.title}</h2>
      <div>{props.user.userName}</div>
      <div> {props.updatedAt}</div>
      <div> {props.body}</div>
    </li>
  );
})`
  height: 100%;
  width: ${(length) => length * 80 + "%"};
  list-style: none;
`;

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
  height: 50px;
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
      <CarouselWrapper currentPage={current} length={props.dataList.length}>
        {props.dataList.map((data, index) => (
          <CarouselItem key={index} {...data} length={props.dataList.length} />
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
