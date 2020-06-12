import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RootStateType } from "client/configureStore";
import { Icon } from "client/components/atoms";
import { Jumbo, CarouselItem } from "client/components/molecules";
import { KeywordBox, Carousel } from "client/components/organisms";

import { boardSelectAction } from "client/containers/Pages/public/Main/actions";

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
  flex: 1;
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
export default ({
  boardSelectAction,
  currentBId,
  boardlist,
  postlist,
}: IProps) => {
  const selectedBoard = () =>
    boardlist.length !== 0
      ? boardlist[currentBId - 1]
      : {
          id: 0,
          name: "",
        };
  return (
    <>
      <SlideBox>
        <Jumbo
          size="XXLARGE"
          title={selectedBoard().name}
          verticalFrom="tablet"
        />
        <Article>
          <Carousel
            items={postlist}
            render={(item, index) => <CarouselItem key={index} item={item} />}
          />
        </Article>
      </SlideBox>
      <KeywordBox boardlist={boardlist} boardSelectAction={boardSelectAction} />
    </>
  );
};
