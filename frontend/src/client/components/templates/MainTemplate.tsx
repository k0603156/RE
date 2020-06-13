import React from "react";
import { RootStateType } from "client/configureStore";
import { MainCarousel } from "client/components/organisms";
import { boardSelectAction } from "client/containers/Pages/public/Main/actions";

interface IProps {
  boardId: number;
  boardName: string;
  boards: RootStateType["main"]["boards"];
  posts: RootStateType["main"]["posts"];
  boardSelectAction: typeof boardSelectAction;
}
export default ({
  boardId,
  boardName,
  boards,
  posts,
  boardSelectAction,
}: IProps) => {
  return (
    <MainCarousel
      boardSelectAction={boardSelectAction}
      boardId={boardId}
      boardName={boardName}
      boards={boards}
      posts={posts}
    />
  );
};
