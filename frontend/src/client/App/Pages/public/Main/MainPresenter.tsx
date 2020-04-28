import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RootStateType } from "@Services/Store/modules/index";
import { Icon } from "@Client/App/Components/atoms";
import { PostBox, Jumbo } from "@Client/App/Components/organisms";
import {
  KeywordBox,
  Carousel,
  CarouselItem,
} from "@Client/App/Components/molecules";
import { boardSelectAction } from "@Services/Store/modules/Main/actions";

const Container = styled.div`
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;
const Title = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 500px;
  flex-grow: 1;
  ${Title} {
    padding: 20px 0;
  }
`;
const VT = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  :last-child {
    position: relative; /* flexbox 스크롤버그 */
  }
  /* :last-child::after {
    display: block;
    width: 11px;
    height: 1px;
    position: absolute;
    top: 0;
    left: 100%;
    visibility: hidden;
    content: "";
  } */
`;

const SlideBox = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
interface IProps {
  boardSelectAction: typeof boardSelectAction;
  currentBId: number;
  boardlist: RootStateType["main"]["boardlist"];
  postlist: RootStateType["main"]["postlist"];
}
export default (props: IProps) => {
  const selectedBoard = () =>
    props.boardlist.length !== 0
      ? props.boardlist[props.currentBId - 1]
      : {
          id: 0,
          name: "",
        };
  return (
    <>
      <SlideBox>
        <Jumbo size="md" verticalFrom={"tablet"}>
          {selectedBoard().name}
        </Jumbo>
        <Article>
          <Carousel
            pageDataList={props.postlist}
            CarouselItem={(data, index) => (
              <CarouselItem
                key={index}
                length={props.postlist.length}
                data={data}
              />
            )}
          />
        </Article>
      </SlideBox>
      <KeywordBox
        boardlist={props.boardlist}
        boardSelectAction={props.boardSelectAction}
      />

      <Container>
        <VT>
          <Jumbo size="md" verticalFrom={"tablet"}>
            RE:* log
          </Jumbo>
          <Article>
            <Title>
              {selectedBoard().name}
              <Link to={"/board/" + selectedBoard().id}>
                <Icon.Fi.FiList />
              </Link>
            </Title>
          </Article>
        </VT>
        <VT>
          <Article>
            <Title>베스트 게시글</Title>
            {new Array(3).fill("").map((_, index) => (
              <PostBox key={index} />
            ))}
          </Article>
          <Jumbo size="sm" verticalFrom={"tablet"}>
            RECOMMENDED ARTICLES
          </Jumbo>
        </VT>
      </Container>
      {/*
      <Container>
        <VT>
          <Jumbo size="sm" verticalFrom={"tablet"}>
            블로그 서비스
          </Jumbo>
          <Article>
            <Title>
              디자이너 게시글
              <Link to="/board/1">
                <Icon.Fi.FiList />
              </Link>
            </Title>

            {new Array(2).fill("").map((_, index) => (
              <PostBox key={index} />
            ))}
          </Article>
        </VT>
        <VT>
          <Article>
            <Title>
              게시글
              <Link to="/board/2">
                <Icon.Fi.FiList />
              </Link>
            </Title>

            {new Array(7).fill("").map((_, index) => (
              <PostBox key={index} />
            ))}
          </Article>
          <Jumbo size="sm">
            하루를
            <br /> 기록하세요
          </Jumbo>
        </VT>
      </Container> */}
    </>
  );
};
