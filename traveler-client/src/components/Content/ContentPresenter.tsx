import React from "react";
import styled from "styled-components";
const ContentBox = styled.div`
  margin: 20px 0;
`;
const Title = styled.div``;
const Date = styled.div``;
const Body = styled.div``;
const Image = styled.div``;
export default () => {
  return (
    <ContentBox>
      <Title>1일차</Title>
      <Date>Dec 4, 2019 9:14 AM</Date>
      <Body> 내용 </Body>
      <Image>image</Image>
    </ContentBox>
  );
};
