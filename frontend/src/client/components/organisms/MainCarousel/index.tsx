import React from "react";
import styled from "styled-components";
import { RootStateType } from "client/configureStore";
import {
  Jumbo,
  KeywordBox,
  Carousel,
  MainCarouselItem,
} from "client/components/molecules";

export interface IProps {
  boards: RootStateType["main"]["boards"];
  pickedBoard: {
    id: number;
    name: string;
    rows: RootStateType["main"]["posts"];
  };
  onSelectBoard: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
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
  boards,
  pickedBoard: { id, name, rows },
  onSelectBoard,
}: IProps) {
  return (
    <>
      <SlideBox>
        <Jumbo size="XXLARGE" title={name} verticalFrom="tablet" />
        <Article>
          <Carousel
            slides={rows.map((post) => (
              <MainCarouselItem item={post} />
            ))}
          />
        </Article>
      </SlideBox>
      <KeywordBox boards={boards} onClickKeyword={onSelectBoard} />
    </>
  );
}
