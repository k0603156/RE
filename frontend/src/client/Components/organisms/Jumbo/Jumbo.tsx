import React from "react";
import styled from "styled-components";
import { Mx_Width } from "@Client/Styles/Device";

interface IProps {
  size: "lg" | "md" | "sm";
  verticalFrom?: string;
  children?: React.ReactNode;
}

const setTypo = (size: IProps["size"]) => {
  const Size: { [Key in IProps["size"]]: number } = {
    lg: 0,
    md: 1,
    sm: 2,
  };
  return {
    "font-size": 3.2 - Size[size] + "rem;",
    "line-height": 4.2 - Size[size] + "rem;",
  };
};

const Box = styled.div`
  display: flex;
  padding: 50px 0;
  writing-mode: ${({ verticalFrom }: IProps) => verticalFrom && "vertical-lr"};
  ${({ verticalFrom }: IProps) =>
    verticalFrom && Mx_Width(`{writing-mode: horizontal-tb;}`)[verticalFrom]}
  height: auto;
  align-items: center;
  justify-content: center;
  span {
    ${({ size }: IProps) => setTypo(size)}
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
