import React from "react";
import styled from "styled-components";

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

export default (props: {
  handlePage:
    | ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void)
    | undefined;
  lengthPage: number;
  currentPage: number;
}) => {
  const { handlePage, lengthPage, currentPage } = props;
  const Arr = Array.from(Array(lengthPage), (_, index) => index + 1).map(
    (_, index) => (
      <PaginationLi key={index} data-page={_} onClick={handlePage}>
        {_}
      </PaginationLi>
    )
  );
  const check = (n: number): boolean => {
    return Math.sign(n) === -1 ? false : true;
  };

  const From = () => {
    const from = currentPage === lengthPage ? currentPage - 3 : currentPage - 2;
    return check(from) ? from : 0;
  };
  const To = () => (currentPage < 2 ? currentPage + 3 : currentPage + 2);

  //TODO:수정필요
  const d = Arr.slice(From(), To());
  return (
    <PaginationUl>
      {d} <PageInput placeholder="page" onKeyUp={e => console.dir(e.keyCode)} />
      <PageMax>/{lengthPage}</PageMax>
    </PaginationUl>
  );
};
