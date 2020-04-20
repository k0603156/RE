export const AUTH_SIGNUP_REQUEST = "auth/AUTH_SIGNUP_REQUEST";
export const AUTH_SIGNUP_SUCCESS = "auth/AUTH_SIGNUP_SUCCESS";
export const AUTH_SIGNUP_FAILURE = "auth/AUTH_SIGNUP_FAILURE";
export const AUTH_SIGNIN_REQUEST = "auth/AUTH_SIGNIN_REQUEST";
export const AUTH_SIGNIN_SUCCESS = "auth/AUTH_SIGNIN_SUCCESS";
export const AUTH_SIGNIN_FAILURE = "auth/AUTH_SIGNIN_FAILURE";
export const AUTH_TOKENREFRESH_REQUEST = "auth/AUTH_TOKENREFRESH_REQUEST";
export const AUTH_TOKENREFRESH_SUCCESS = "auth/AUTH_TOKENREFRESH_SUCCESS";
export const AUTH_TOKENREFRESH_FAILURE = "auth/AUTH_TOKENREFRESH_FAILURE";
export const AUTH_SIGNOUT_REQUEST = "auth/AUTH_SIGNOUT_REQUEST";
export const AUTH_SIGNOUT_SUCCESS = "auth/AUTH_SIGNOUT_SUCCESS";
export const AUTH_SIGNOUT_FAILURE = "auth/AUTH_SIGNOUT_FAILURE";
export const AUTH_DROPOUT_REQUEST = "auth/AUTH_DROPOUT_REQUEST";
export const AUTH_DROPOUT_SUCCESS = "auth/AUTH_DROPOUT_SUCCESS";
export const AUTH_DROPOUT_FAILURE = "auth/AUTH_DROPOUT_FAILURE";

export interface InitialState {
  isLogged: boolean;
  isAdmin: boolean;
  me: {
    email: string;
    userName: string;
  };
}

// 사용자가입
export interface IAuthSignupAction {
  type: typeof AUTH_SIGNUP_REQUEST;
  payload: {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  callback: () => void;
}
// 로그인
export interface IAuthSigninAction {
  type: typeof AUTH_SIGNIN_REQUEST;
  payload: { email: string; password: string };
}
// 토큰재발행
export interface IAuthTokenrefreshAction {
  type: typeof AUTH_TOKENREFRESH_REQUEST;
}
// 로그아웃
export interface IAuthSignoutAction {
  type: typeof AUTH_SIGNOUT_REQUEST;
  payload: { email: string };
}
// 사용자탈퇴
export interface IAuthDropoutAction {
  type: typeof AUTH_DROPOUT_REQUEST;
  payload: {
    email: string;
  };
}
export type IAuthAction =
  | IAuthSignupAction
  | IAuthSigninAction
  | IAuthTokenrefreshAction
  | IAuthSignoutAction
  | IAuthDropoutAction;
