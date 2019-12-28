import React from "react";
import styled, { css } from "styled-components";
interface IJumbo {
  large?: boolean;
  medium?: boolean;
  vertical?: number;
  children?: React.ReactNode;
}

const Box = styled.div`
  display: flex;
  padding: 50px 0;
  writing-mode: ${({ vertical }: IJumbo) => vertical && "vertical-lr"};
  ${({ vertical }: IJumbo) => {
    return (
      vertical &&
      css`
        @media only screen and (max-width: ${vertical}px) {
          writing-mode: horizontal-tb;
        }
      `
    );
  }};

  height: auto;
  align-items: center;
  justify-content: center;
  span {
    font-size: ${({ large, medium }: IJumbo) =>
      large ? 3.8 : medium ? 2.8 : 1.8}rem;
    line-height: ${({ large, medium }: IJumbo) =>
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

const Jumbo = (props: IJumbo) => {
  return (
    <Box {...props}>
      <span>{props.children}</span>
    </Box>
  );
};

export default Jumbo;
