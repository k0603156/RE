import React from "react";
import styled from "styled-components";
import { Box, Input, TextArea } from "Components/atoms";
import { SearchableSelector } from "Components/molecules";
import CountryData from "data/country";

export default (props: {
  data: {
    title: string;
    country: string;
    fromDate: string;
    toDate: string;
    mainBody: string;
    image: string;
  };
  onChange: any;
}) => {
  const formData = props.data;
  return (
    <Box>
      <label htmlFor="headerTitle">제목</label>
      <Input
        id={"headerTitle"}
        entity={"title"}
        value={formData.title}
        onChange={props.onChange}
        type={"text"}
      />
      <label htmlFor="headerfromDate">fromDate</label>
      <Input
        id={"headerfromDate"}
        entity={"fromDate"}
        value={formData.fromDate}
        onChange={props.onChange}
        type={"date"}
      />
      <label htmlFor="headertoDate">toDate</label>
      <Input
        id={"headertoDate"}
        entity={"toDate"}
        value={formData.toDate}
        onChange={props.onChange}
        type={"date"}
      />
      <label htmlFor="headerCountry">country</label>
      <SearchableSelector
        id={"headerCountry"}
        entry={"country"}
        value={CountryData[parseInt(formData.country)].value}
        setValue={props.onChange}
        options={CountryData}
      />

      <label htmlFor="headermainBody">mainBody</label>
      <TextArea
        id={"headermainBody"}
        entity={"mainBody"}
        value={formData.mainBody}
        setChange={props.onChange}
        textMax={100}
      />
    </Box>
  );
};
