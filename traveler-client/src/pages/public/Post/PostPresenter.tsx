import React from "react";
import styled from "styled-components";
import Content from "Components/Content";

const Title = styled.h3``;
const Date = styled.div``;
const SubTitle = styled.div``;

export default () => {
  return (
    <div>
      <Title>laoreet</Title>
      <Date>Dec 4, 2019 9:14 AM</Date>
      <SubTitle>
        Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming
        aperiam delicata est.
      </SubTitle>
      <Content /> <Content /> <Content /> <Content />
    </div>
  );
};
