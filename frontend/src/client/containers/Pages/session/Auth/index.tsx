import React, { useState } from "react";
import useInput from "client/lib/hooks/useInput";
import { connect } from "react-redux";
import { authSignupAction, authSigninAction } from "./actions";
import AuthTemplate, {
  AuthState,
} from "client/components/templates/AuthTemplate";

export interface IProps {
  authSigninAction: typeof authSigninAction;
  authSignupAction: typeof authSignupAction;
}

const AuthContainer = ({ authSigninAction, authSignupAction }: IProps) => {
  const [action, setAction] = useState<AuthState>(AuthState.STATE_LOGIN);
  const userName = useInput<string>("");
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
    <AuthTemplate
      email={email}
      username={userName}
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
