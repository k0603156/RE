import React from "react";

import { Pagination, BoardPost } from "client/components/molecules";

interface IProps {
  totalCount: number;
  currentPage: number;
  postlist: RootStateType["board"]["rows"];
  postPerPage: number;
  handlePage: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

export default function BoardPostList({
  totalCount,
  currentPage,
  postlist,
  postPerPage,
  handlePage,
}: IProps) {
  return (
    <ul>
      {postlist.map((post: any) => (
        <BoardPost key={post.id} post={post} />
      ))}
      <Pagination
        handlePage={handlePage}
        totalCount={totalCount}
        currentPage={currentPage}
        postPerPage={postPerPage}
      />
    </ul>
  );
}
