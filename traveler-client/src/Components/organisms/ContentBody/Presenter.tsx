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
  const formData = props.data;
  return (
    <BodyBox>
      <DateCount>
        <span>Day+{props.nthDate + 1}</span>
      </DateCount>
      <label htmlFor="contentTitle">title</label>
      <Input
        id={"contentTitle"}
        entity={"title"}
        value={formData.title}
        onChange={props.onChange}
        type={"text"}
      />
      <label htmlFor="contentDate">date</label>
      <Input
        id={"contentDate"}
        entity={"date"}
        value={formData.date}
        onChange={props.onChange}
        type={"date"}
      />
      <label htmlFor="contentBody">Body</label>
      <TextArea
        id={"contentBody"}
        entity={"body"}
        value={formData.body}
        setChange={props.onChange}
        textMax={100}
      />
    </BodyBox>
  );
};
