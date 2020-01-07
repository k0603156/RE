import React from "react";
import styled from "styled-components";
import Input from "Components/Form/Input";
import SearchableSelect from "Components/Form/SearchableSelect";
import Content from "Components/Content";
import { NormalButton } from "Components/Button";
import CountryData from "data/country";
export default (props: {
  title: IUseInputReturn<string>;
  country: IUseInputReturn<string>;
  fromDate: IUseInputReturn<string>;
  toDate: IUseInputReturn<string>;
  subTitle: IUseInputReturn<string>;
  contentsArr: {
    title: IUseInputReturn<string>;
    date: IUseInputReturn<string>;
    body: IUseInputReturn<string>;
    toDate: IUseInputReturn<string>;
    image: IUseInputReturn<string>;
  }[];
  onSubmit: any;
}) => {
  const {
    title,
    country,
    fromDate,
    toDate,
    subTitle,
    onSubmit,
    contentsArr
  } = props;
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
        {contentsArr.map((data, index) => (
          <Content data={data} key={index} />
        ))}
        <NormalButton text={"포스팅"} type={"submit"}></NormalButton>
      </form>
    </div>
  );
};
