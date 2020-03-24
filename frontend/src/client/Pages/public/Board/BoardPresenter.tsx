import React from "react";
import styled from "styled-components";
import { Pagination, PostBox } from "@Client/Components/organisms";
import { RootStateType } from "@Store/modules";

const BoardBox = styled.div``;
const BoardTitle = styled.h3``;
const BoardList = styled.ul``;

interface IProps {
  handlePage: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  lengthPage: number;
  currentPage: number;
  postlist: RootStateType["postlist"];
}
export default (props: IProps) => {
  console.log(props.postlist);
  return (
    <BoardBox>
      <BoardTitle>title</BoardTitle>
      <BoardList>
        {props.postlist.map((post: any) => (
          <PostBox key={post.id} index={post.id} post={post} />
        ))}

        <Pagination
          handlePage={props.handlePage}
          lengthPage={props.lengthPage}
          currentPage={props.currentPage}
        />
      </BoardList>
    </BoardBox>
  );
};
