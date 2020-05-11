import React from "react";
import styled from "styled-components";

interface IProps {
  id: string;
  message: string;
}
const MessageBox = styled((props: IProps) => {
  return <div>{props.message}</div>;
})`
  position: fixed;
  bottom: 5px;
  right: 3px;
  height: 40px;
  width: auto;
  line-height: 30px;
  padding: 5px 10px;
  color: white;
  font-weight: 800;
  border-radius: 3px;
  box-shadow: 1px 1px 4px gray;
  background-color: ${(props) =>
    props.id === "ERROR" ? "rgba(100, 0, 0, 0.5)" : "rgba(0, 100, 0, 0.5)"};
`;
export default MessageBox;
