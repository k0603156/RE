import React, { useState, useEffect } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "Hooks/useInput";
import AuthState from "./AuthState";
import { connect } from "react-redux";
import { login } from "Store/modules/Auth/actions";
import { create_user } from "Store/modules/User/actions";

const AuthContainer = (props: {
  auth: IAuthState;
  loadingAuth: any;
  loadingCreateUser: any;
  login: ActionLoginType;
  create_user: ActionCreateUserType;
}) => {
  const [action, setAction] = useState<AuthState>(AuthState.STATE_LOGIN);
  const userName = useInput<string>("");
  const email = useInput<string>("");
  const password = useInput<string>("");
  const confirmPassword = useInput<string>("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    switch (action) {
      case AuthState.STATE_LOGIN:
        props.login(email.value, password.value);
        break;
      case AuthState.STATE_SIGNUP:
        if (password.value !== confirmPassword.value) {
          console.log("비밀번호 확인란이 같지 않습니다.");
          break;
        }
        props.create_user(
          userName.value,
          email.value,
          password.value,
          confirmPassword.value,
          () => {
            userName.setValue("");
            email.setValue("");
            password.setValue("");
            confirmPassword.setValue("");
            setAction(AuthState.STATE_LOGIN);
          }
        );
        break;
      case AuthState.STATE_CONFIRM:
        break;
    }
  };

  return (
    <AuthPresenter
      email={email}
      userName={userName}
      password={password}
      confirmPassword={confirmPassword}
      onSubmit={onSubmit}
      action={action}
      setAction={setAction}
    />
  );
};

export default connect(
  ({ auth, loading }: RootStateType) => ({
    auth,
    loadingAuth: loading["auth/AUTHENTICATE"],
    loadingCreateUser: loading["user/CREATE_USERE"]
  }),
  { login, create_user }
)(AuthContainer);
