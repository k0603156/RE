import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "Hooks/useInput";
import AuthAction from "./AuthAction";
const AuthContainer = () => {
  const [action, setAction] = useState<AuthAction>(AuthAction.ACTION_LOGIN);
  const email = useInput("");
  const userName = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");
  const onSubmit = async (e: any) => {
    e.preventDefault();
    switch (action) {
      case AuthAction.ACTION_LOGIN:
        console.log("Login");
        break;
      case AuthAction.ACTION_SIGNUP:
        if (password !== confirmPassword) {
          console.log("비밀번호 확인란이 같지 않습니다.");
          break;
        }
        console.log("Signup");
        break;
      case AuthAction.ACTION_CONFIRM:
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

export default AuthContainer;
