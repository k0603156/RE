import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "Hooks/useInput";
import AuthState from "./AuthState";
import { connect } from "react-redux";
import { login } from "Store/modules/Auth/actions";
import { User } from "Api";

const AuthContainer = (props: {
  auth: IAuthState;
  loadingAuth: any;
  login: ActionLoginType;
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
        if (password.value !== confirmPassword.value) {
          console.log("비밀번호 확인란이 같지 않습니다.");
          break;
        }
        User.create_user({
          userName: userName.value,
          email: email.value,
          password: password.value,
          confirmPassword: confirmPassword.value
        }).then(_ => {
          if (_.status === 201) {
            userName.setValue("");
            email.setValue("");
            password.setValue("");
            confirmPassword.setValue("");
            setAction(AuthState.STATE_LOGIN);
          }
        });
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
  { login }
)(AuthContainer);
