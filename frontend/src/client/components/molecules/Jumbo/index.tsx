import React from "react";
import styled from "styled-components";
import { maxWidth } from "client/styles/DeviceBreakpoints";

interface IProps {
  size: "XSMALL" | "SMALL" | "MEDIUM" | "LARGE" | "XLARGE" | "XXLARGE";
  title: string;
  verticalFrom?: string;
}

const Jumbo = styled.div<Pick<IProps, "size" | "verticalFrom">>`
  height: auto;
  margin: auto;
  letter-spacing: 10px;
  ${({ verticalFrom }) =>
    verticalFrom &&
    `
      writing-mode: vertical-lr;
      ${maxWidth(`{writing-mode: horizontal-tb;}`)[verticalFrom]}
    `};
  ${({ theme, size }) => `font-size:${theme.FONTS.SIZE[size]}`};
`;

export default ({ size, title, verticalFrom }: IProps) => {
  return (
    <Jumbo size={size} verticalFrom={verticalFrom}>
      {title}
    </Jumbo>
  );
};
