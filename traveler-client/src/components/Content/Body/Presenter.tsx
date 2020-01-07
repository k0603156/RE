import React from "react";
import styled from "styled-components";
const ContentBox = styled.div`
  margin: 20px 0;
`;
const Input = styled.input`
  width: 100%;
`;
export default (props: {
  data: {
    title: any;
    date: any;
    body: any;
    toDate: any;
    image: any;
  };
  nthDate: number;
  onChange: any;
}) => {
  const contentEntries = Object.entries(props.data).map(([key, entry]) => {
    console.dir(props.data);
    return (
      <label key={key} htmlFor={key + props.nthDate}>
        {key}
        <Input
          id={key + props.nthDate}
          data-entry={key}
          value={entry}
          onChange={props.onChange}
          autoComplete={"off"}
        />
      </label>
    );
  });
  return (
    <ContentBox>
      <h4>{props.nthDate + 1}일차</h4>
      {contentEntries}
    </ContentBox>
  );
};
