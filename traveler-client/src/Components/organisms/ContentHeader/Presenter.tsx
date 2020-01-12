import React from "react";
import styled from "styled-components";
import { Box, Input, TextArea, FileLoad } from "Components/atoms";
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
  /**
   * @주의 리덕스에 Form 값을 저장할 경우 성능상 문제가 있으니
   * onChange를 디바운싱하고 value로 값을 동기화 시키는게 아니라
   * defaultValue로 처음 랜더링 될 때만 값을 넣어준다.
   */
  return (
    <Box>
      <label htmlFor="headerTitle">제목</label>
      <Input
        id={"headerTitle"}
        entity={"title"}
        defaultValue={props.data.title}
        onChange={props.onChange}
        type={"text"}
        maxLength={100}
      />
      <label htmlFor="headerfromDate">fromDate</label>
      <Input
        id={"headerfromDate"}
        entity={"fromDate"}
        defaultValue={props.data.fromDate}
        onChange={props.onChange}
        type={"date"}
      />
      <label htmlFor="headertoDate">toDate</label>
      <Input
        id={"headertoDate"}
        entity={"toDate"}
        defaultValue={props.data.toDate}
        onChange={props.onChange}
        type={"date"}
      />
      <label htmlFor="headerCountry">country</label>
      <SearchableSelector
        id={"headerCountry"}
        entry={"country"}
        defaultValue={CountryData[Number(formData.country)].value}
        onChange={props.onChange}
        options={CountryData}
      />
      <label htmlFor="headermainBody">mainBody</label>
      <TextArea
        id={"headermainBody"}
        entity={"mainBody"}
        defaultValue={props.data.mainBody}
        onChange={props.onChange}
        maxLength={100}
      />
      <label htmlFor="headertoDate">image</label>
      <FileLoad
        id={"headerimage"}
        entity={"image"}
        defaultValue={props.data.image}
        onChange={props.onChange}
      />
    </Box>
  );
};
