/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import styled from "styled-components";

// TODO:수정필요
interface IProps {
  className?: string;
  handlePage:
    | ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void)
    | undefined;
  totalCount: number;
  currentPage: number;
  postPerPage: number;
}

export default styled(
  ({ className, handlePage, totalCount, currentPage, postPerPage }: IProps) => {
    const pages = Math.ceil(totalCount / postPerPage);

    const Arr = Array.from(Array(pages), (_, index) => index + 1).map((_) => (
      <li key={_} data-page={_} onClick={handlePage}>
        {_}
      </li>
    ));
    const check = (n: number): boolean => {
      return Math.sign(n) !== -1;
    };

    const From = () => {
      const from = currentPage === pages ? currentPage - 3 : currentPage - 2;
      return check(from) ? from : 0;
    };
    const To = () => (currentPage < 2 ? currentPage + 3 : currentPage + 2);

    const d = Arr.slice(From(), To());
    return <ul className={className}>{d}</ul>;
  },
)`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  padding: 20px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  li {
    width: 40px;
    padding: 5px;
    margin: 0 5px;
    color: rgb(21, 18, 31);
    font-weight: 600;
    text-align: center;
    user-select: none;
    cursor: pointer;
  }
`;
