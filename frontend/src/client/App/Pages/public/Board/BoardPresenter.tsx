import React from "react";
import styled from "styled-components";
import { RootStateType } from "@Services/Store/modules";
import { Pagination, BoardItem } from "@Client/App/Components/organisms";

interface IProps {
  className?: string;
  title: string;
  totalCount: number;
  currentPage: number;
  postlist: RootStateType["board"]["rows"];
  postPerPage: number;
  handlePage: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}
export default styled(
  ({
    className,
    title,
    totalCount,
    currentPage,
    postlist,
    postPerPage,
    handlePage,
  }: IProps) => {
    return (
      <div className={className}>
        <h3 className="title">{title}</h3>
        <ul>
          {postlist.map((post: any) => (
            <BoardItem key={post.id} post={post} />
          ))}

          <Pagination
            handlePage={handlePage}
            totalCount={totalCount}
            currentPage={currentPage}
            postPerPage={postPerPage}
          />
        </ul>
      </div>
    );
  },
)`
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgb(47, 44, 55);
  h3 {
    padding: 15px;
    font-size: 1.8rem;
  }
`;
