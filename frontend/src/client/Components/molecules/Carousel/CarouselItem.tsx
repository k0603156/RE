import React from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  length: number;
  data: {
    id: number;
    title: string;
    readcount: number;
    updatedAt: string;
    user: { userName: string };
  };
}
export default styled((props: IProps) => {
  return (
    <li className={props.className} key={props.data.id}>
      <h2>{props.data.title}</h2>
      <div>{props.data.user.userName}</div>
      <div> {props.data.updatedAt}</div>
    </li>
  );
})`
  height: 100%;
  width: ${({ length }) => 100 / length}%;
  list-style: none;
`;
