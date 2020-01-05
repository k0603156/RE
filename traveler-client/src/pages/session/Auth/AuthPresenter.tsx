import React from "react";
import styled from "styled-components";
import AuthState from "./AuthState";
import Input from "Components/Form/Input";
import { NormalButton, SimpleButton } from "Components/Button";
interface IProps {
  email: IUseInputReturn;
  userName: IUseInputReturn;
  password: IUseInputReturn;
  confirmPassword: IUseInputReturn;
  onSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
  action: AuthState;
  setAction: React.Dispatch<React.SetStateAction<AuthState>>;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius:0px;
  width: 100%;
  max-width: 350px;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;
function AuthPresenter({
  email,
  userName,
  password,
  confirmPassword,
  onSubmit,
  action,
  setAction
}: IProps) {
  return (
    <Wrapper>
      <Form>
        {action === AuthState.STATE_LOGIN && (
          <>
            <form onSubmit={onSubmit}>
              <Input
                placeholder={"Email"}
                value={email.value}
                onChange={email.onChange}
                type="email"
              />
              <Input
                placeholder={"Password"}
                value={password.value}
                onChange={password.onChange}
                type="password"
                pattern={"[A-Za-z0-9]*"}
              />
              <NormalButton text={"Sign In"} type={"submit"}></NormalButton>
            </form>
            Don't have an account?
            <SimpleButton
              text={"Sign Up"}
              onClick={() => {
                setAction(AuthState.STATE_SIGNUP);
              }}
            ></SimpleButton>
          </>
        )}
        {action === AuthState.STATE_SIGNUP && (
          <>
            <form onSubmit={onSubmit}>
              <Input
                placeholder={"Email"}
                value={email.value}
                onChange={email.onChange}
                type="email"
              />
              <Input
                placeholder={"UserName"}
                value={userName.value}
                onChange={userName.onChange}
                type="text"
                pattern={"[A-Za-z0-9]*"}
                minLength={3}
                maxLength={15}
              />
              <Input
                placeholder={"Password"}
                value={password.value}
                onChange={password.onChange}
                type="password"
                pattern={"[A-Za-z0-9]*"}
                minLength={8}
                maxLength={20}
                title="특수문자를 제외한 8~20글자"
              />
              <Input
                placeholder={"ConfirmPassword"}
                value={confirmPassword.value}
                onChange={confirmPassword.onChange}
                type="password"
                pattern={"[A-Za-z0-9]*"}
                minLength={8}
                maxLength={20}
                title="특수문자를 제외한 8~20글자"
              />
              <NormalButton text={"Sign up"} type={"submit"}></NormalButton>
            </form>
            Did you have an account?
            <SimpleButton
              text={"Sign in"}
              onClick={() => {
                setAction(AuthState.STATE_LOGIN);
              }}
            ></SimpleButton>
          </>
        )}
      </Form>
    </Wrapper>
  );
}

export default AuthPresenter;
