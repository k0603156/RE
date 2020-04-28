import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RootStateType } from "@Services/Store/modules/index";
import {
  boardSelectAction,
  boardlistBrowseAction,
  postlistBrowseAction,
} from "@Services/Store/modules/Main/actions";
import MainPresenter from "./MainPresenter";

export interface IProps {
  selectedBoard: RootStateType["main"]["selectedBoard"];
  boardlist: RootStateType["main"]["boardlist"];
  postlist: RootStateType["main"]["postlist"];
  boardSelectAction: typeof boardSelectAction;
  boardlistBrowseAction: typeof boardlistBrowseAction;
  postlistBrowseAction: typeof postlistBrowseAction;
}
const MainContainer = (props: IProps) => {
  useEffect(() => {
    props.boardlist.length == 0 && props.boardlistBrowseAction();
    props.postlistBrowseAction(props.selectedBoard);
    return () => {};
  }, [props.selectedBoard]);
  return (
    <MainPresenter
      boardSelectAction={props.boardSelectAction}
      currentBId={props.selectedBoard}
      boardlist={props.boardlist}
      postlist={props.postlist}
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
  }
)(MainContainer);
