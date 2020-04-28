import React from "react";
import styled from "styled-components";
import { Pagination, PostBox } from "@Client/App/Components/organisms";
import { RootStateType } from "@Store/modules";

const BoardBox = styled.div``;
const BoardTitle = styled.h3``;
const BoardList = styled.ul``;

interface IProps {
  title: string;
  handlePage: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  totalCount: number;
  currentPage: number;
  postlist: RootStateType["board"]["rows"];
  postPerPage: number;
}
export default (props: IProps) => {
  return (
    <BoardBox>
      <BoardTitle>{props.title}</BoardTitle>
      <BoardList>
        {props.postlist.map((post: any) => (
          <PostBox key={post.id} index={post.id} post={post} />
        ))}

        <Pagination
          handlePage={props.handlePage}
          totalCount={props.totalCount}
          currentPage={props.currentPage}
          postPerPage={props.postPerPage}
        />
      </BoardList>
    </BoardBox>
  );
};
