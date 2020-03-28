import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RootStateType } from "@Store/modules/index";
import { boardlistBrowseAction } from "@Store/modules/Main/actions";
import MainPresenter from "./MainPresenter";
interface IProps {
  main: RootStateType["main"];
  boardlistBrowseAction: typeof boardlistBrowseAction;
}
const MainContainer = (props: IProps) => {
  useEffect(() => {
    props.boardlistBrowseAction();
    return () => {};
  }, []);
  return <MainPresenter boardlist={props.main.boardlist} />;
};

export default connect(({ main }: RootStateType) => ({ main }), {
  boardlistBrowseAction
})(MainContainer);
