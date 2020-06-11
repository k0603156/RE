import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RootStateType } from "client/configureStore";
import {
  boardSelectAction,
  boardlistBrowseAction,
  postlistBrowseAction,
} from "./actions";
import MainTemplate from "client/components/templates/MainTemplate";

export interface IProps {
  selectedBoard: RootStateType["main"]["selectedBoard"];
  boardlist: RootStateType["main"]["boardlist"];
  postlist: RootStateType["main"]["postlist"];
  boardSelectAction: typeof boardSelectAction;
  boardlistBrowseAction: typeof boardlistBrowseAction;
  postlistBrowseAction: typeof postlistBrowseAction;
}
const MainContainer = ({
  selectedBoard,
  boardlist,
  postlist,
  boardSelectAction,
  boardlistBrowseAction,
  postlistBrowseAction,
}: IProps) => {
  useEffect(() => {
    boardlist.length === 0 && boardlistBrowseAction();
    postlistBrowseAction(selectedBoard);
    return () => {};
  }, [selectedBoard]);
  return (
    <MainTemplate
      boardSelectAction={boardSelectAction}
      currentBId={selectedBoard}
      boardlist={boardlist}
      postlist={postlist}
    />
  );
};

export default connect(
  ({ main }: RootStateType) => ({
    selectedBoard: main.selectedBoard,
    boardlist: main.boardlist,
    postlist: main.postlist,
  }),
  {
    boardSelectAction,
    boardlistBrowseAction,
    postlistBrowseAction,
  },
)(MainContainer);
