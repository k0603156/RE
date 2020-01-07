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
    title: IUseInputReturn<string>;
    date: IUseInputReturn<string>;
    body: IUseInputReturn<string>;
    toDate: IUseInputReturn<string>;
    image: IUseInputReturn<string>;
  };
}) => {
  const contentEntries = Object.entries(props.data).map(([key, entry]) => {
    return (
      <label key={key} htmlFor={key}>
        {key}
        <Input value={entry.value} onChange={entry.onChange} />
      </label>
    );
  });
  return (
    <ContentBox>
      <h4>n일차</h4>
      {contentEntries}
    </ContentBox>
  );
};
