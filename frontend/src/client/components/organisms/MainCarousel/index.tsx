import React from "react";
import styled from "styled-components";
import { RootStateType } from "client/configureStore";
import { Jumbo, KeywordBox, Carousel } from "client/components/molecules";
import { MainCarouselItem } from "client/components/organisms";

interface IProps {
  onSelectBoard: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  boardId: number;
  boardName: string;
  boards: RootStateType["main"]["boards"];
  posts: RootStateType["main"]["posts"];
}
const Article = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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

export default function MainCarousel({
  onSelectBoard,
  boardId,
  boardName,
  boards,
  posts,
}: IProps) {
  return (
    <>
      <SlideBox>
        <Jumbo size="XXLARGE" title={boardName} verticalFrom="tablet" />
        <Article>
          <Carousel
            slides={posts.map((post) => (
              <MainCarouselItem item={post} />
            ))}
          />
        </Article>
      </SlideBox>
      <KeywordBox boards={boards} onClickKeyword={onSelectBoard} />
    </>
  );
}
