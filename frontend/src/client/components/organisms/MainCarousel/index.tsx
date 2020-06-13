import React from "react";
import styled from "styled-components";
import { RootStateType } from "client/configureStore";
import {
  Jumbo,
  Carousel,
  CarouselItem,
  KeywordBox,
} from "client/components/molecules";

import { boardSelectAction } from "client/containers/Pages/public/Main/actions";

interface IProps {
  boardSelectAction: typeof boardSelectAction;
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
  boardSelectAction,
  boardId,
  boardName,
  boards,
  posts,
}: IProps) {
  const onSelect = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    boardSelectAction(Number(e.currentTarget.dataset.keyid!));
  };
  return (
    <>
      <SlideBox>
        <Jumbo size="XXLARGE" title={boardName} verticalFrom="tablet" />
        <Article>
          <Carousel
            items={posts}
            render={(item, index) => <CarouselItem key={index} item={item} />}
          />
        </Article>
      </SlideBox>
      <KeywordBox boards={boards} onSelect={onSelect} />
    </>
  );
}
