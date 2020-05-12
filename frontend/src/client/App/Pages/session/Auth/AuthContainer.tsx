import React, { useState } from "react";
import useInput from "@Client/App/Hooks/useInput";
import { connect } from "react-redux";
import {
  authSignupAction,
  authSigninAction,
} from "@Services/Store/modules/Auth/actions";
import AuthState from "./AuthState";
import AuthPresenter from "./AuthPresenter";

interface IProps {
  authSigninAction: typeof authSigninAction;
  authSignupAction: typeof authSignupAction;
}

const AuthContainer = ({ authSigninAction, authSignupAction }: IProps) => {
  const [action, setAction] = useState<AuthState>(AuthState.STATE_LOGIN);
  const username = useInput<string>("");
  const email = useInput<string>("");
  const password = useInput<string>("");
  const confirmPassword = useInput<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (action) {
      case AuthState.STATE_LOGIN:
        authSigninAction(email.value, password.value);
        break;
      case AuthState.STATE_SIGNUP:
        if (password.value !== confirmPassword.value) {
          /* eslint-disable no-console */
          console.log("비밀번호 확인란이 같지 않습니다.");
          break;
        }
        authSignupAction(
          username.value,
          email.value,
          password.value,
          confirmPassword.value,
          () => {
            username.setValue("");
            email.setValue("");
            password.setValue("");
            confirmPassword.setValue("");
            setAction(AuthState.STATE_LOGIN);
          },
        );
        break;
      case AuthState.STATE_CONFIRM:
        break;
      default:
        break;
    }
  };

  return (
    <AuthPresenter
      email={email}
      username={username}
      password={password}
      confirmPassword={confirmPassword}
      onSubmit={onSubmit}
      action={action}
      setAction={setAction}
    />
  );
};

export default connect(() => ({}), {
  authSignupAction,
  authSigninAction,
})(AuthContainer);
