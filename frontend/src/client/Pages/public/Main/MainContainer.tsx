import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RootStateType } from "@Store/modules/index";
import {
  boardlistBrowseAction,
  postlistBrowseAction
} from "@Store/modules/Main/actions";
import MainPresenter from "./MainPresenter";
interface IProps {
  main: RootStateType["main"];
  boardlistBrowseAction: typeof boardlistBrowseAction;
  postlistBrowseAction: typeof postlistBrowseAction;
}
const MainContainer = (props: IProps) => {
  useEffect(() => {
    props.main.boardlist.length == 0 && props.boardlistBrowseAction();
    props.postlistBrowseAction("1");
    return () => {};
  }, []);
  return <MainPresenter boardlist={props.main.boardlist} />;
};

export default connect(({ main }: RootStateType) => ({ main }), {
  boardlistBrowseAction,
  postlistBrowseAction
})(MainContainer);
