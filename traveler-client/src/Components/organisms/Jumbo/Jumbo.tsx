import React from "react";
import styled from "styled-components";
import { Mx_Width } from "Styles/Device";

interface IProps {
  large?: boolean;
  medium?: boolean;
  verticalFrom?: string;
  children?: React.ReactNode;
}

const Box = styled.div`
  display: flex;
  padding: 50px 0;
  writing-mode: ${({ verticalFrom }: IProps) => verticalFrom && "vertical-lr"};
  //Todo:style만 분리한 함수 필요 빈값체크가 생겨서는안됨
  ${({ verticalFrom }: IProps) =>
    verticalFrom && Mx_Width(`{writing-mode: horizontal-tb;}`)[verticalFrom]}
  height: auto;
  align-items: center;
  justify-content: center;
  span {
    font-size: ${({ large, medium }: IProps) =>
      large ? 3.8 : medium ? 2.8 : 1.8}rem;
    line-height: ${({ large, medium }: IProps) =>
      large ? 4.8 : medium ? 3.8 : 2.8}rem;
    letter-spacing: 10px;
    > br {
      display: none;
      @media only screen and (max-width: 475px) {
        display: inline;
      }
    }
  }
`;

const Jumbo = (props: IProps) => {
  return (
    <Box {...props}>
      <span>{props.children}</span>
    </Box>
  );
};

export default Jumbo;
