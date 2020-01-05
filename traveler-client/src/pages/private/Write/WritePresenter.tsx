import React from "react";
import styled from "styled-components";
import Input from "Components/Form/Input";
import SearchableSelect from "Components/Form/SearchableSelect";
import { NormalButton } from "Components/Button";
import CountryData from "data/country";

export default (props: {
  title: any;
  country: any;
  fromDate: any;
  toDate: any;
  subTitle: any;
  onSubmit: any;
}) => {
  const { title, country, fromDate, toDate, subTitle, onSubmit } = props;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <Input
          id={"title"}
          placeholder={"Title"}
          value={title.value}
          onChange={title.onChange}
          type="text"
        />
        <label htmlFor="country">Country</label>
        <SearchableSelect
          id={"country"}
          placeholder={"Country"}
          value={country.value}
          setValue={country.setValue}
          options={CountryData}
        />
        <label htmlFor="fromdate">FromDate</label>
        <Input
          id={"fromdate"}
          placeholder={"FromDate"}
          value={fromDate.value}
          onChange={fromDate.onChange}
          type="date"
        />

        <label htmlFor="todate">ToDate</label>
        <Input
          id={"todate"}
          placeholder={"ToDate"}
          value={toDate.value}
          onChange={toDate.onChange}
          type="date"
        />
        <label htmlFor="subtitle">SubTitle</label>
        <Input
          id={"subtitle"}
          placeholder={"SubTitle"}
          value={subTitle.value}
          onChange={subTitle.onChange}
          type="text"
        />
        <NormalButton text={"포스팅"} type={"submit"}></NormalButton>
      </form>
    </div>
  );
};
