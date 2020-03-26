import React, { useEffect } from "react";
import UserPresenter from "./UserPresenter";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { userSelectAction } from "@Store/modules/User/actions";
import { RootStateType } from "@Store/modules";

export interface IProps
  extends RouteComponentProps<{ searchUserName: string }> {
  user: RootStateType["user"];
  userSelectAction: typeof userSelectAction;
}
const UserContainer = withRouter((props: IProps) => {
  const searchUserName = props.match.params.searchUserName;
  useEffect(() => {
    props.userSelectAction(searchUserName);
  }, [props.match.params.searchUserName]);

  return <UserPresenter user={props.user} />;
});
export default connect(
  ({ user, loading }: RootStateType) => ({
    user,
    loadingAuth: loading["user/USER_SELECT_REQUEST"]
  }),
  { userSelectAction }
)(UserContainer);
