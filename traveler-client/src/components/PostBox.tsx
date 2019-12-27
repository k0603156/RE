import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  > * {
    margin: 6px 0;
  }
`;
const Hash = styled.div`
  font-size: 0.7rem;
  color: ${props => props.theme.normalGreyColor};
`;
const Title = styled.h5`
  font-size: 0.8rem;
  font-weight: 500;
`;
const Time = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${props => props.theme.lightGreyColor};
`;
const Content = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
`;
const PostBox = () => {
  return (
    <Box>
      <Hash>#여행 #포스팅</Hash>
      <Title>laoreet</Title>
      <Time>Dec 4, 2019 9:14 AM</Time>
      <Content>
        Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming
        aperiam delicata est.
      </Content>
    </Box>
  );
};

export default PostBox;
