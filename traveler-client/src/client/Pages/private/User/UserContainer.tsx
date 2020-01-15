import React, { useEffect } from "react";
import UserPresenter from "./UserPresenter";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { select_user } from "@Store/modules/User/actions";

const UserContainer = withRouter((props: any) => {
  const searchUserName = props.match.params.searchUserName;
  useEffect(() => {
    props.select_user(searchUserName);
  }, [props.match.params.searchUserName]);
  return <UserPresenter user={props.user} />;
});
export default connect(
  ({ user, loading }: RootStateType) => ({
    user,
    loadingAuth: loading["user/SELECT_USER"]
  }),
  { select_user }
)(UserContainer);

// export default UserContainer;
