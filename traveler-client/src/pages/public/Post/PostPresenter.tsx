import React from "react";
import styled from "styled-components";
import { ContentBody } from "Components/Content";

const Title = styled.h3``;
const Country = styled.div``;
const FromDate = styled.div``;
const ToDate = styled.div``;
const SubTitle = styled.div``;
const MainImage = styled.div``;

export default () => {
  return (
    <div>
      <Title>laoreet</Title>
      <Country>Korea, Republic of</Country>
      <FromDate>From:Dec 4, 2019 9:14 AM</FromDate>
      <ToDate>To:Dec 4, 2019 9:14 AM</ToDate>
      <SubTitle>
        Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming
        aperiam delicata est.
      </SubTitle>
      <MainImage>mainImage</MainImage>
    </div>
  );
};
