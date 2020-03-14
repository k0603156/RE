import React from "react";
import styled from "styled-components";
import { Pagination, PostBox } from "@Client/Components/organisms";

interface IPost {
  title: string;
  date: Date;
  image: string;
  content: String;
}
interface IPostList {
  board: string;
  data: IPost[];
}
const BoardBox = styled.div``;
const BoardTitle = styled.h3``;
const BoardList = styled.ul``;

interface Inf {
  handlePage: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  lengthPage: number;
  currentPage: number;
}
export default ({ handlePage, lengthPage, currentPage }: Inf) => {
  return (
    <BoardBox>
      <BoardTitle></BoardTitle>
      <BoardList>
        {new Array(20).fill("").map((_, index) => (
          <PostBox key={index} index={index} />
        ))}

        <Pagination
          handlePage={handlePage}
          lengthPage={lengthPage}
          currentPage={currentPage}
        />
      </BoardList>
    </BoardBox>
  );
};
