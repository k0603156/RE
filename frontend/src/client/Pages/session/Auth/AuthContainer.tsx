import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "@Client/Hooks/useInput";
import AuthState from "./AuthState";
import { connect } from "react-redux";
import { authLoginAction } from "@Store/modules/Auth/actions";
import { authCreateAction } from "@Store/modules/Auth/actions";
import { RootStateType } from "store/modules";

const AuthContainer = (props: {
  auth: RootStateType["auth"];
  loadingAuth: RootStateType["loading"];
  loadingCreateUser: RootStateType["loading"];
  authLoginAction: typeof authLoginAction;
  authCreateAction: typeof authCreateAction;
}) => {
  const [action, setAction] = useState<AuthState>(AuthState.STATE_LOGIN);
  const userName = useInput<string>("");
  const email = useInput<string>("");
  const password = useInput<string>("");
  const confirmPassword = useInput<string>("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    switch (action) {
      case AuthState.STATE_LOGIN:
        props.authLoginAction(email.value, password.value);
        break;
      case AuthState.STATE_SIGNUP:
        if (password.value !== confirmPassword.value) {
          console.log("비밀번호 확인란이 같지 않습니다.");
          break;
        }
        props.authCreateAction(
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
    loadingAuth: loading["auth/AUTH_LOGIN_REQUEST"],
    loadingCreateUser: loading["user/USER_CREATE_REQUEST"],
  }),
  { authLoginAction, authCreateAction }
)(AuthContainer);
