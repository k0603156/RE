import React from "react";
import styled from "styled-components";
import PostBox from "components/PostBox";
const Main = styled.div``;

const Container = styled.div`
  width: 100%;
  max-height: 2500px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    max-height: none;
  }
  > * {
    width: 50%;
    @media only screen and (max-width: 768px) {
      width: 100%;
      height: auto;
    }
    :last-child {
      position: relative;
      /* flexbox 스크롤버그 */
    }
    :last-child::after {
      display: block;
      width: 11px;
      height: 1px;
      position: absolute;
      top: 0;
      left: 100%;
      visibility: hidden;
      content: "";
    }
  }
`;
interface JumboAttr {
  large?: boolean;
  medium?: boolean;
  vertical?: boolean;
}
const Jumbo = styled.div`
  display: flex;
  padding: 50px 0;
  writing-mode: ${({ vertical }: JumboAttr) => vertical && "vertical-lr"};
  @media only screen and (max-width: 768px) {
    writing-mode: horizontal-tb;
  }
  height: auto;

  align-items: center;
  justify-content: center;
  span {
    font-size: ${({ large, medium }: JumboAttr) =>
      large ? 3.8 : medium ? 2.8 : 1.8}rem;
    line-height: ${({ large, medium }: JumboAttr) =>
      large ? 4.8 : medium ? 3.8 : 2.8}rem;
    letter-spacing: 10px;
    > br {
      display: none;
      @media only screen and (max-width: 475px) {
        display: inline;
      }
    }
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
      <Jumbo medium vertical>
        <span>Traveler</span>
      </Jumbo>
      <Article>
        <Title>베스트 여행기</Title>
        <PostBox /> <PostBox /> <PostBox /> <PostBox /> <PostBox />
      </Article>
      <Jumbo large vertical>
        <span>고민은</span>
      </Jumbo>
      <Article>
        <Title>해외 여행기</Title>
        <PostBox /> <PostBox /> <PostBox /> <PostBox /> <PostBox />
      </Article>
      <Jumbo>
        <span>당신의 열정에 맡기고</span>
      </Jumbo>
      <Article>
        <Title>최신 여행기</Title>
        <PostBox /> <PostBox /> <PostBox /> <PostBox /> <PostBox />
      </Article>
      <Article>
        <Title>국내 여행기</Title>
        <PostBox /> <PostBox /> <PostBox /> <PostBox /> <PostBox />
      </Article>
      <Jumbo medium vertical>
        <span>
          지금
          <br /> 떠나자
        </span>
      </Jumbo>
    </Container>
  </Main>
);
