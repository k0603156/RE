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
  const onSelectBoard = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    boardSelectAction(Number(e.currentTarget.dataset.keyid!));
  };
  return (
    <div>
      <MainCarousel
        onSelectBoard={onSelectBoard}
        boardId={boardId}
        boardName={boardName}
        boards={boards}
        posts={posts}
      />
    </div>
  );
};
