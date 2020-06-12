import React, { useState } from "react";
import styled from "styled-components";

interface IProps<T extends Array<any>> {
  className?: string;
  items: T;
  render: (data: IProps<T>["items"][0], index: number) => React.ReactNode;
}

const Body = styled.ul<{ current: number }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  height: 200px;
  padding: 0;
  transition: transform 0.3s ease 0s;
  ${({ current }) => `transform: translateX(${-90 * current}%);`}
`;
const Footer = styled.ul`
  height: 50px;
  display: flex;
  width: auto;
  margin: auto;
  li {
    flex: 1;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    transition: transform 0.3s ease 0s;
    ${({ theme }) => theme.DEFAULT.LIST.BASE};
    &.active a {
      font-weight: 600;
    }
    a {
      padding: 5px 10px;
      ${({ theme }) => theme.FONT_STYLES.MONTSERRAT.SMALL.REGULAR.TRENDY_BLUE};
    }
  }
`;

const Carousel = styled(
  <T extends Array<any>>({ className, ...props }: IProps<T>) => {
    const [current, setCurrent] = useState(0);
    return (
      <div className={className}>
        <Body current={current}>{props.items.map(props.render)}</Body>
        <Footer>
          {props.items.map((data, index) => (
            <li className={current === index ? "active" : ""} key={index}>
              <a onClick={(e) => setCurrent(index)}>
                {String(index).padStart(2, "0")}
              </a>
            </li>
          ))}
        </Footer>
      </div>
    );
  },
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
