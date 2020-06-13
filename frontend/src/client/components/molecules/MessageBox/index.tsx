import React from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  type: string;
  message: string;
}
const MessageBox = styled(({ className, type, message }: IProps) => {
  const classNames = `${className} ${type === "ERROR" ? "red" : "green"}`;
  return <div className={classNames}>{message}</div>;
})`
  position: fixed;
  bottom: ${({ theme }) => theme.DEFAULT.OFFSET};
  right: ${({ theme }) => theme.DEFAULT.OFFSET};
  height: 40px;
  width: auto;
  line-height: 30px;
  padding: 5px 10px;
  ${({ theme }) => `
  ${theme.FONT_STYLES.MONTSERRAT.MEDIUM.BOLD.WHITE}
  ${theme.DEFAULT.BORDER_RADIUS}
  ${theme.DEFAULT.BOX_SHADOW}`}
  &.green {
    background-color: rgba(0, 100, 0, 0.5);
  }
  &.red {
    background-color: rgba(100, 0, 0, 0.5);
  }
`;
export default MessageBox;
