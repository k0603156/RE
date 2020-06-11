import React from "react";
import styled from "styled-components";
import { Input, Button } from "client/components/atoms";

export enum AuthState {
  STATE_LOGIN = "STATE_LOGIN",
  STATE_SIGNUP = "STATE_SIGNUP",
  STATE_CONFIRM = "STATE_CONFIRM",
}

export interface IProps {
  className?: string;
  email: IUseInputReturn<string>;
  username: IUseInputReturn<string>;
  password: IUseInputReturn<string>;
  confirmPassword: IUseInputReturn<string>;
  onSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
  action: AuthState;
  setAction: React.Dispatch<React.SetStateAction<AuthState>>;
}

const AuthTemplate = styled(
  ({
    className,
    email,
    username,
    password,
    confirmPassword,
    onSubmit,
    action,
    setAction,
  }: IProps) => {
    return (
      <div className={className}>
        <div className="wrapper">
          {action === AuthState.STATE_LOGIN && (
            <>
              <form onSubmit={onSubmit}>
                <Input
                  placeholder="Email"
                  value={email.value}
                  onChange={email.onChange}
                  type="email"
                />
                <Input
                  placeholder="Password"
                  value={password.value}
                  onChange={password.onChange}
                  type="password"
                  pattern="[A-Za-z0-9]*"
                />
                <Button type="submit">Sign In</Button>
              </form>
              Don&apos;t have an account?
              <Button
                type="button"
                onClick={() => setAction(AuthState.STATE_SIGNUP)}
              >
                Sign Up
              </Button>
            </>
          )}
          {action === AuthState.STATE_SIGNUP && (
            <>
              <form onSubmit={onSubmit}>
                <Input
                  placeholder="Email"
                  value={email.value}
                  onChange={email.onChange}
                  type="email"
                />
                <Input
                  placeholder="UserName"
                  value={username.value}
                  onChange={username.onChange}
                  type="text"
                  pattern="[A-Za-z0-9]*"
                  minLength={3}
                  maxLength={15}
                />
                <Input
                  placeholder="Password"
                  value={password.value}
                  onChange={password.onChange}
                  type="password"
                  pattern="[A-Za-z0-9]*"
                  minLength={8}
                  maxLength={20}
                  title="특수문자를 제외한 8~20글자"
                />
                <Input
                  placeholder="ConfirmPassword"
                  value={confirmPassword.value}
                  onChange={confirmPassword.onChange}
                  type="password"
                  pattern="[A-Za-z0-9]*"
                  minLength={8}
                  maxLength={20}
                  title="특수문자를 제외한 8~20글자"
                />
                <Button type="submit">Sign up</Button>
              </form>
              Did you have an account?
              <Button
                onClick={() => {
                  setAction(AuthState.STATE_LOGIN);
                }}
              >
                Sign in
              </Button>
            </>
          )}
        </div>
      </div>
    );
  },
)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div.wrapper {
    width: 100%;
    max-width: 350px;
    ${({ theme }) => theme.DEFAULT.BOX.BASE}
    form {
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
  }
`;

export default AuthTemplate;
