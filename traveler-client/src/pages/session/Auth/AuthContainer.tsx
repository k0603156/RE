import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "Hooks/useInput";
import AuthState from "./AuthState";
import { connect } from "react-redux";
import {
  login,
  check_otp,
  change_token,
  logout
} from "Store/modules/Auth/actions";

const AuthContainer = (props: {
  auth: IAuthState;
  login: ActionLoginType;
  check_otp: ActionCheckOTPType;
  change_token: ActionChangeTokenType;
  logout: ActionLogoutType;
}) => {
  const [action, setAction] = useState<AuthState>(AuthState.STATE_LOGIN);
  const userName = useInput("");
  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    switch (action) {
      case AuthState.STATE_LOGIN:
        props.login(email.value, password.value);
        console.log("로그인");
        break;
      case AuthState.STATE_SIGNUP:
        if (password !== confirmPassword) {
          console.log("비밀번호 확인란이 같지 않습니다.");
          break;
        }
        console.log("Signup");
        break;
      case AuthState.STATE_CONFIRM:
        console.log("Confirm");
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
    loadingAuth: loading["auth/AUTHENTICATE"]
  }),
  { login, check_otp, change_token, logout }
)(AuthContainer);
