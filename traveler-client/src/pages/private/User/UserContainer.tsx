import React, { useEffect } from "react";
import UserPresenter from "./UserPresenter";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { get_user } from "Store/modules/User/actions";

const UserContainer = withRouter((props: any) => {
  const userName = props.match.params.userName;
  useEffect(() => {
    props.get_user(userName);
  }, [userName]);
  return <UserPresenter user={props.user} />;
});
export default connect(
  ({ user, loading }: RootStateType) => ({
    user,
    loadingAuth: loading["user/GET_USER"]
  }),
  { get_user }
)(UserContainer);

// export default UserContainer;
