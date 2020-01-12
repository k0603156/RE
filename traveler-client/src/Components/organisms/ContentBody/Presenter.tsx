import React from "react";
import styled from "styled-components";
import { TextArea, Box, Input } from "Components/atoms";

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
    body: string;
    image: string;
  };
  onChange: any;
}) => {
  return (
    <BodyBox>
      <DateCount>
        <span>Day+{props.nthDate + 1}</span>
      </DateCount>
      <label htmlFor={`contentTitle+${props.nthDate}`}>title</label>
      <Input
        id={`contentTitle+${props.nthDate}`}
        defaultValue={props.data.title}
        entity={"title"}
        onChange={props.onChange}
        type={"text"}
      />
      <label htmlFor={`contentDate+${props.nthDate}`}>date</label>
      <Input
        id={`contentDate+${props.nthDate}`}
        defaultValue={props.data.date}
        entity={"date"}
        onChange={props.onChange}
        type={"date"}
      />
      <label htmlFor={`contentBody+${props.nthDate}`}>Body</label>
      <TextArea
        id={`contentBody+${props.nthDate}`}
        defaultValue={props.data.body}
        entity={"body"}
        onChange={props.onChange}
        textMax={100}
      />
    </BodyBox>
  );
};
