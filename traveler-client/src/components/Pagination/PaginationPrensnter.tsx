import React from "react";
import styled from "styled-components";
import { IPagination } from "./Pagination";

const PaginationUl = styled.ul`
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const PaginationLi = styled.li`
  width: 40px;
  padding: 5px;
  margin: 0 5px;
  text-align: center;
  user-select: none;
  cursor: pointer;
`;

const PageInput = styled.input`
  width: 50px;
`;
const PageMax = styled.span`
  padding: 5px;
`;

export default ({ handlePage, lengthPage, currentPage }: IPagination) => {
  const check = (num: number): boolean => {
    return Math.sign(num) == -1 ? false : true;
  };

  const Arr = Array.from(Array(lengthPage), (_, index) => index + 1).map(
    (_, index) => (
      <PaginationLi key={index} data-page={_} onClick={handlePage}>
        {_}
      </PaginationLi>
    )
  );

  //TODO:수정필요
  const d = Arr.slice(
    (() => {
      const s = currentPage == lengthPage ? currentPage - 3 : currentPage - 2;
      return check(
        currentPage == lengthPage ? currentPage - 3 : currentPage - 2
      )
        ? s
        : 0;
    })(),
    currentPage < 2 ? currentPage++ + 2 : currentPage++ + 1
  );
  return (
    <PaginationUl>
      {d} <PageInput placeholder="page" onKeyUp={e => console.dir(e.keyCode)} />
      <PageMax>/{lengthPage}</PageMax>
    </PaginationUl>
  );
};
