import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RootStateType } from "client/configureStore";
import {
  boardSelectAction,
  boardlistBrowseAction,
  postlistBrowseAction,
} from "./actions";
import {
  boardIdSelector,
  boardNameSelector,
  boardlistSelector,
  postlistSelector,
} from "./selectors";
import MainTemplate from "client/components/templates/MainTemplate";

export interface IProps {
  boardId: RootStateType["main"]["boardId"];
  boardName: string;
  boards: RootStateType["main"]["boards"];
  posts: RootStateType["main"]["posts"];
  boardSelectAction: typeof boardSelectAction;
  boardlistBrowseAction: typeof boardlistBrowseAction;
  postlistBrowseAction: typeof postlistBrowseAction;
}
const MainContainer = ({
  boardId,
  boardName,
  boards,
  posts,
  boardSelectAction,
  boardlistBrowseAction,
  postlistBrowseAction,
}: IProps) => {
  useEffect(() => {
    boards.length === 0 && boardlistBrowseAction();
    postlistBrowseAction(boardId);
    return () => {};
  }, [boardId]);

  return (
    <MainTemplate
      boardId={boardId}
      boardName={boardName}
      boards={boards}
      posts={posts}
      boardSelectAction={boardSelectAction}
    />
  );
};

export default connect(
  (state: RootStateType) => ({
    boardId: boardIdSelector(state),
    boardName: boardNameSelector(state),
    boards: boardlistSelector(state),
    posts: postlistSelector(state),
  }),
  {
    boardSelectAction,
    boardlistBrowseAction,
    postlistBrowseAction,
  },
)(MainContainer);
