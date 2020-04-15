import React from "react";
import styled from "styled-components";
import { RootStateType } from "@Store/modules/index";

interface IProps {
  className?: string;
  length: number;
  data: RootStateType["main"]["postlist"][0];
}

const CarouselItem = styled.div`
  div {
    margin-top: 5px;
  }
  div.username {
    font-size: 1rem;
  }
  div.updatedat {
    font-size: 0.8rem;
  }
  div.tags {
    display: flex;
    width: 100%;

    font-size: 0.8rem;
    span {
      border: 1px solid lightgray;
      border-radius: 3px;
      padding: 2px 4px;
      &:not(:last-of-type) {
        margin-right: 3px;
      }
    }
  }
`;
export default styled((props: IProps) => {
  return (
    <CarouselItem className={props.className} key={props.data.id}>
      <h2>{props.data.title}</h2>
      <div className={"username"}>@{props.data.user.userName}</div>
      <div className={"updatedat"}>{props.data.updatedAt}</div>
      <div className={"tags"}>
        {props.data.hashtags.map((hashtag) => (
          <span key={hashtag.name}>#{hashtag.name}</span>
        ))}
      </div>
    </CarouselItem>
  );
})`
  height: 100%;
  width: ${({ length }) => 100 / length}%;
  list-style: none;
`;
