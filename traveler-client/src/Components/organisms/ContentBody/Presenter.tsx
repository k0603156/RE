import React, { Fragment } from "react";
import styled from "styled-components";
import { Input } from "Components/atoms";

const Box = styled.div`
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
  const labelSet: any = {
    title: { label: "제목", type: "text" },
    date: { label: "날짜", type: "date" },
    body: { label: "본문", type: "text" },
    image: { label: "이미지", type: "text" }
  };
  const contentEntries = Object.entries(props.data).map(([key, value]) => {
    return (
      <Fragment key={key}>
        <label htmlFor={key + props.nthDate}>{labelSet[key].label} </label>
        <Input
          id={key + props.nthDate}
          entry={key}
          value={value}
          onChange={props.onChange}
          type={labelSet[key].type}
        />
      </Fragment>
    );
  });
  return (
    <Box>
      <DateCount>
        <span>Day+{props.nthDate + 1}</span>
      </DateCount>
      {contentEntries}
    </Box>
  );
};
