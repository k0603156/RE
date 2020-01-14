import React from "react";
import styled from "styled-components";
interface IProps extends React.HTMLAttributes<HTMLDivElement> {}
const Box = styled.div`
  border-radius: 10px;
  box-shadow: 2px 3px 2px gray;
  padding: 25px 12px;
`;

const BoxDiv = (props: IProps) => <Box>{props.children}</Box>;

export default BoxDiv;
