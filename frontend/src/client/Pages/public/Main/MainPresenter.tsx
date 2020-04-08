import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RootStateType } from "@Store/modules/index";
import { FiList } from "@Client/Components/molecules/Icon/fi";
import { PostBox, Jumbo } from "@Client/Components/organisms";
import { boardSelectAction } from "@Store/modules/Main/actions";
import { KeywordBox, List } from "@Client/Components/molecules";

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
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
interface IProps {
  boardSelectAction: typeof boardSelectAction;
  selectedBoard: number;
  boardlist: RootStateType["main"]["boardlist"];
  postlist: RootStateType["main"]["postlist"];
}
export default (props: IProps) => {
  const selectedBoardName = () =>
    props.boardlist.length != 0 &&
    props.boardlist[props.selectedBoard - 1].name;
  const selectedBoardPosts = () =>
    props.postlist.map(
      (post: { id: string; title: string; updatedAt: string }) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <div>{post.updatedAt}</div>
        </div>
      )
    );

  return (
    <>
      <SlideBox>
        <Jumbo size="md" verticalFrom={"tablet"}>
          {selectedBoardName()}
        </Jumbo>
        <Article>{selectedBoardPosts()}</Article>
      </SlideBox>
      <KeywordBox
        boardlist={props.boardlist}
        boardSelectAction={props.boardSelectAction}
      />

      <Container>
        <VT>
          <Jumbo size="md" verticalFrom={"tablet"}>
            Symphonia
          </Jumbo>
          <Article>
            <Title>
              {selectedBoardName()}
              <Link to="/board/2">
                <FiList />
              </Link>
            </Title>

            {selectedBoardPosts()}
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

      <Container>
        <VT>
          <Jumbo size="sm" verticalFrom={"tablet"}>
            블로그 서비스
          </Jumbo>
          <Article>
            <Title>
              디자이너 게시글
              <Link to="/board/1">
                <FiList />
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
                <FiList />
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
      </Container>
    </>
  );
};
