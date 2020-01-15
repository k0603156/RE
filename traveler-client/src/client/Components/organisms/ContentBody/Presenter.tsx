import React from "react";
import styled from "styled-components";
import { TextArea, Box, Input } from "@Client/Components/atoms";

const BodyBox = styled(Box)`
  margin-top: 25px;
  label {
    margin-top: 12px;
    font-size: 0.8rem;
  }
`;
const DateCount = styled.div`
  display: flex;
  margin-bottom: 12px;
  span {
    padding: 3px 7px;
    border: 1px solid black;
    border-radius: 3px;
    font-size: 0.8rem;
  }
`;

export default (props: {
  nthDate: number;
  data: {
    title: string;
    date: string;
    content: string;
    image: string;
  };
  onChange: any;
}) => {
  return (
    <BodyBox>
      <DateCount>
        <span>Day+{props.nthDate + 1}</span>
      </DateCount>
      <label htmlFor={`storyTitle+${props.nthDate}`}>title</label>
      <Input
        id={`stroyTitle+${props.nthDate}`}
        defaultValue={props.data.title}
        entity={"title"}
        onChange={props.onChange}
        type={"text"}
        maxLength={100}
      />
      <label htmlFor={`stroyDate+${props.nthDate}`}>date</label>
      <Input
        id={`stroyDate+${props.nthDate}`}
        defaultValue={props.data.date}
        entity={"date"}
        onChange={props.onChange}
        type={"date"}
      />
      <label htmlFor={`stroyContent+${props.nthDate}`}>content</label>
      <TextArea
        id={`stroyContent+${props.nthDate}`}
        defaultValue={props.data.content}
        entity={"content"}
        onChange={props.onChange}
        maxLength={100}
      />
    </BodyBox>
  );
};
