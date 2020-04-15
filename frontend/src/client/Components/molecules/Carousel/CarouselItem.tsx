import React from "react";
import styled from "styled-components";
import { RootStateType } from "@Store/modules/index";

interface IProps {
  className?: string;
  length: number;
  data: RootStateType["main"]["postlist"][0];
}
export default styled((props: IProps) => {
  console.log(props.data.hashtags);
  return (
    <li className={props.className} key={props.data.id}>
      <h2>{props.data.title}</h2>
      <div>{props.data.user.userName}</div>
      <div> {props.data.updatedAt}</div>
      <div>
        {props.data.hashtags.map((hashtag) => (
          <span key={hashtag.name}>#{hashtag.name}</span>
        ))}
      </div>
    </li>
  );
})`
  height: 100%;
  width: ${({ length }) => 100 / length}%;
  list-style: none;
`;
