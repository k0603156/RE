import React from "react";
import styled from "styled-components";
import { maxWidth } from "client/styles/DeviceBreakpoints";

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
    "font-size": `${3.2 - Size[size]}rem;`,
    "line-height": `${4.2 - Size[size]}rem;`,
  };
};

const Box = styled.div`
  display: flex;
  padding: 50px 0;
  writing-mode: ${({ verticalFrom }: IProps) => verticalFrom && "vertical-lr"};
  ${({ verticalFrom }: IProps) =>
    verticalFrom && maxWidth(`{writing-mode: horizontal-tb;}`)[verticalFrom]}
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
export default ({ size, verticalFrom, children }: IProps) => {
  return (
    <Box size={size} verticalFrom={verticalFrom}>
      <span>{children}</span>
    </Box>
  );
};
