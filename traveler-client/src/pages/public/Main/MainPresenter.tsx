import React from "react";
import styled from "styled-components";
import PostBox from "components/PostBox";
const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 40%;
`;
interface JumboSize {
  lg?: boolean;
  md?: boolean;
}
const Jumbo = styled.div`
  display: flex;
  font-size: ${({ lg, md }: JumboSize) => (lg ? "6" : md ? "4" : "2")}rem;
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;
  span {
    letter-spacing: 5px;
  }
`;
const Article = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;

  > :first-child {
    padding: 20px 0;
  }
`;
const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
`;
export default () => (
  <Main>
    <Container>
      <Jumbo lg>
        <span>Traveler</span>
      </Jumbo>
      <Article>
        <Title>베스트 여행기</Title>
        <PostBox /> <PostBox /> <PostBox /> <PostBox /> <PostBox />
      </Article>
      <Jumbo>
        <span>당신의 열정에 맡기고</span>
      </Jumbo>
      <Article>
        <Title>해외 여행기</Title>
        <PostBox /> <PostBox /> <PostBox /> <PostBox /> <PostBox />
      </Article>
    </Container>

    <Container>
      <Article>
        <Title>최신 여행기</Title>
        <PostBox /> <PostBox /> <PostBox /> <PostBox /> <PostBox />
      </Article>
      <Jumbo md>
        <span>고민은</span>
      </Jumbo>
      <Article>
        <Title>국내 여행기</Title>
        <PostBox /> <PostBox /> <PostBox /> <PostBox /> <PostBox />
      </Article>
      <Jumbo md>
        <span>지금 떠나자</span>
      </Jumbo>
    </Container>
  </Main>
);
