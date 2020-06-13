import React from "react";
import styled from "styled-components";

interface IProps<T extends Array<any>> {
  className?: string;
  items: T;
  current: number;
  render: (data: IProps<T>["items"][0], index: number) => React.ReactNode;
  onClickIdx: (idx: number) => void;
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
  <T extends Array<any>>({
    className,
    items,
    current,
    render,
    onClickIdx,
  }: IProps<T>) => {
    const padZero = (idx: number) => String(idx).padStart(2, "0");
    const isActive = (idx: number) => (current === idx ? "active" : "");
    const onClick = (idx: number) => () => onClickIdx(idx);
    return (
      <div className={className}>
        <Body current={current}>{items.map(render)}</Body>
        <Footer>
          {items.map((_, index) => (
            <li className={isActive(index)} key={index}>
              <a onClick={onClick(index)}>{padZero(index)}</a>
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
