import React from "react";
import styled from "styled-components";
const ContentBox = styled.div`
  margin: 20px 0;
`;
const Input = styled.input`
  width: 100%;
`;
export default (props: { data: any; onChange: any }) => {
  const headerEntries = Object.entries(props.data).map(([key, entry]) => {
    console.dir(props.data);
    const value: any = entry;
    return (
      <label key={key} htmlFor={key}>
        {key}
        <Input
          id={key}
          value={value}
          onChange={props.onChange}
          autoComplete={"off"}
        />
      </label>
    );
  });
  return (
    <ContentBox>
      {headerEntries}
      {/* <label htmlFor="title">Title</label>
      <Input
        id={"title"}
        placeholder={"Title"}
        value={post.header.title}
        onChange={e => set_content_header("title", e.target.value)}
        type="text"
      />
      <label htmlFor="country">Country</label>
      <SearchableSelect
        id={"country"}
        placeholder={"Country"}
        value={post.header.country}
        setValue={(data: string) => set_content_header("country", data)}
        options={CountryData}
      />
      <label htmlFor="fromdate">FromDate</label>
      <Input
        id={"fromdate"}
        placeholder={"FromDate"}
        value={post.header.fromdate}
        onChange={e => set_content_header("fromDate", e.target.value)}
        type="date"
      />

      <label htmlFor="todate">ToDate</label>
      <Input
        id={"todate"}
        placeholder={"ToDate"}
        value={post.header.todate}
        onChange={e => set_content_header("toDate", e.target.value)}
        type="date"
      />
      <label htmlFor="subtitle">SubTitle</label>
      <Input
        id={"subtitle"}
        placeholder={"SubTitle"}
        value={post.header.subtitle}
        onChange={e => set_content_header("subTitle", e.target.value)}
        type="text"
      /> */}
    </ContentBox>
  );
};
