import React from "react";
import styled from "styled-components";

interface IProps {
  handlePage:
    | ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void)
    | undefined;
  totalCount: number;
  currentPage: number;
  postPerPage: number;
}
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

export default (props: IProps) => {
  const { handlePage, totalCount, currentPage, postPerPage } = props;
  const pages = Math.ceil(totalCount / postPerPage);

  const Arr = Array.from(Array(pages), (_, index) => index + 1).map(
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
    const from = currentPage === pages ? currentPage - 3 : currentPage - 2;
    return check(from) ? from : 0;
  };
  const To = () => (currentPage < 2 ? currentPage + 3 : currentPage + 2);

  // function paginate(array: Array<any>, page_size: number, page_number: number) {
  //   return array.slice(page_size * (page_number - 1), page_size * page_number);
  // }
  //TODO:수정필요
  const d = Arr.slice(From(), To());
  return <PaginationUl>{d}</PaginationUl>;
};
