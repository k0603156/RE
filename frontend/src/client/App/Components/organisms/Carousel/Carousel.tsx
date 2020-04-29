import React, { useState } from "react";
import styled from "styled-components";

interface IProps<T extends Array<any>> {
  className?: string;
  pageDataList: T;
  CarouselItem: (
    data: IProps<T>["pageDataList"][0],
    index: number
  ) => React.ReactNode;
}
const Footer = styled(
  <T extends Array<any>>(
    props: IProps<T> & {
      currentPage: number;
      setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    }
  ) => (
    <ul className={props.className}>
      {props.pageDataList.map((data, index) => (
        <li className={props.currentPage === index ? "active" : ""} key={index}>
          <a onClick={(e) => props.setCurrentPage(index)}>
            {String(index).padStart(2, "0")}
          </a>
        </li>
      ))}
    </ul>
  )
)`
  height: 50px;
  display: flex;
  width: auto;
  margin: auto;
  li {
    flex: 1;
    list-style: none;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    transition: transform 0.3s ease 0s;
    &.active {
      font-weight: 600;
    }
    a {
      padding: 5px 10px;
      color: rgb(21, 18, 31);
    }
  }
`;

const Body = styled(
  <T extends Array<any>>(props: IProps<T> & { currentPage: number }) => (
    <ul className={props.className}>
      {props.pageDataList.map(props.CarouselItem)}
    </ul>
  )
)`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  height: 200px;
  width: ${({ pageDataList }) => pageDataList.length * 80 + "%"};
  padding: 0;
  transform: translateX(
    ${({ currentPage, pageDataList }) => {
      return -100 * (currentPage / pageDataList.length) + "%";
    }}
  );
  transition: transform 0.3s ease 0s;
`;

const Carousel = styled(
  <T extends Array<any>>({ className, ...props }: IProps<T>) => {
    const [currentPage, setCurrentPage] = useState(0);
    return (
      <div className={className}>
        <Body
          {...props}
          currentPage={currentPage}
          pageDataList={props.pageDataList}
        />
        <Footer
          {...props}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    );
  }
)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`;
export default <T extends Array<any>>(props: IProps<T>) => {
  return <Carousel {...props} />;
};
