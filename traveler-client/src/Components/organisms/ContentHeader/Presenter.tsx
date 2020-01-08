import React from "react";
import styled from "styled-components";
import { Input } from "Components/atoms";
import { SearchableSelector } from "Components/molecules";
import CountryData from "data/country";

const Box = styled.div``;
export default (props: {
  data: {
    title: string;
    country: string;
    fromDate: string;
    toDate: string;
    subTitle: string;
    image: string;
  };
  onChange: any;
}) => {
  const labelSet: any = {
    title: { label: "제목", type: "text" },
    country: { label: "국가", type: "selector" },
    fromDate: { label: "출발일", type: "date" },
    toDate: { label: "도착일", type: "date" },
    mainBody: { label: "메인내용", type: "text" },
    image: { label: "이미지", type: "text" }
  };
  const headerEntries = Object.entries(props.data).map(([key, entry]) => {
    return (
      <label key={key} htmlFor={key}>
        {labelSet[key].label}
        {labelSet[key].type === "selector" ? (
          <SearchableSelector
            id={key}
            entry={key}
            value={CountryData[parseInt(entry)].value}
            setValue={props.onChange}
            options={CountryData}
          />
        ) : (
          <Input
            id={key}
            entry={key}
            value={entry}
            onChange={props.onChange}
            type={labelSet[key].type}
          />
        )}
      </label>
    );
  });
  return <Box>{headerEntries}</Box>;
};
