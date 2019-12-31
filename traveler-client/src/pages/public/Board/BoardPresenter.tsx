import React from "react";
import styled from "styled-components";
import PostBox from "components/PostBox";

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
const PL = styled.ul`
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const PI = styled.li`
  width: 40px;
  padding: 5px;
  margin: 0 5px;
  text-align: center;
  user-select: none;
  cursor: pointer;
`;
interface Inf {
  handlePageClick: any;
  length: any;
  currentPage: any;
}
export default ({ handlePageClick, length, currentPage }: Inf) => {
  const check = (num: number): boolean => {
    return Math.sign(num) == -1 ? false : true;
  };

  const Arr = Array.from(Array(length), (_, index) => index + 1).map(
    (_, index) => (
      <PI key={index} data-page={_} onClick={handlePageClick}>
        {_}
      </PI>
    )
  );
  const d = Arr.slice(
    (() => {
      console.log("current:", currentPage);
      const s = currentPage == length ? currentPage - 3 : currentPage - 2;
      console.log(s);
      return check(s) ? s : 0;
    })(),
    (() => {
      const v = currentPage < 2 ? currentPage++ + 2 : currentPage++ + 1;
      console.log("v:", v);
      return v;
    })()
  );

  return (
    <BoardBox>
      <BoardTitle></BoardTitle>
      <BoardList>
        {new Array(20).fill("").map((_, index) => (
          <PostBox key={index} index={index} />
        ))}

        <PL>{d}</PL>
      </BoardList>
    </BoardBox>
  );
};
