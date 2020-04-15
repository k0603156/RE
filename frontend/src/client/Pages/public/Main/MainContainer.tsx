import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RootStateType } from "@Store/modules/index";
import {
  boardSelectAction,
  boardlistBrowseAction,
  postlistBrowseAction,
} from "@Store/modules/Main/actions";
import MainPresenter from "./MainPresenter";
interface IProps {
  main: RootStateType["main"];
  boardSelectAction: typeof boardSelectAction;
  boardlistBrowseAction: typeof boardlistBrowseAction;
  postlistBrowseAction: typeof postlistBrowseAction;
}
const MainContainer = (props: IProps) => {
  useEffect(() => {
    props.main.boardlist.length == 0 && props.boardlistBrowseAction();
    props.postlistBrowseAction(props.main.selectedBoard);
    return () => {};
  }, [props.main.selectedBoard]);
  return (
    <MainPresenter
      boardSelectAction={props.boardSelectAction}
      currentBId={props.main.selectedBoard}
      boardlist={props.main.boardlist}
      postlist={props.main.postlist}
    />
  );
};

export default connect(({ main }: RootStateType) => ({ main }), {
  boardSelectAction,
  boardlistBrowseAction,
  postlistBrowseAction,
})(MainContainer);
