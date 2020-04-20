import {
  AUTH_SIGNUP_REQUEST,
  AUTH_SIGNIN_REQUEST,
  AUTH_TOKENREFRESH_REQUEST,
  AUTH_SIGNOUT_REQUEST,
  AUTH_DROPOUT_REQUEST,
  IAuthAction,
} from "./types";

export function authSignupAction(
  userName: string,
  email: string,
  password: string,
  confirmPassword: string,
  callback: () => void
): IAuthAction {
  return {
    type: AUTH_SIGNUP_REQUEST,
    payload: {
      userName,
      email,
      password,
      confirmPassword,
    },
    callback,
  };
}

export function authSigninAction(email: string, password: string): IAuthAction {
  return {
    type: AUTH_SIGNIN_REQUEST,
    payload: {
      email,
      password,
    },
  };
}

export function authTokenrefreshAction(): IAuthAction {
  return {
    type: AUTH_TOKENREFRESH_REQUEST,
  };
}

export function authSignoutAction(email: string): IAuthAction {
  return {
    type: AUTH_SIGNOUT_REQUEST,
    payload: { email },
  };
}

export function authDropoutAction(email: string): IAuthAction {
  return {
    type: AUTH_DROPOUT_REQUEST,
    payload: {
      email,
    },
  };
}
