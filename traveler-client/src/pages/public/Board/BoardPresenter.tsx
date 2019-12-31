import React from "react";
import styled from "styled-components";
import PostBox from "components/PostBox";
import Pagination from "components/Pagination";

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
  handlePage: any;
  lengthPage: any;
  currentPage: any;
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
