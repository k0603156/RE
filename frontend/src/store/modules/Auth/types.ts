// 사용자 가입
export const AUTH_CREATE_REQUEST = "auth/AUTH_CREATE_REQUEST";
export const AUTH_CREATE_SUCCESS = "auth/AUTH_CREATE_SUCCESS";
export const AUTH_CREATE_FAILURE = "auth/AUTH_CREATE_FAILURE";
// 로그인 요청
export const AUTH_LOGIN_REQUEST = "auth/AUTH_LOGIN_REQUEST";
export const AUTH_LOGIN_SUCCESS = "auth/AUTH_LOGIN_SUCCESS";
export const AUTH_LOGIN_FAILURE = "auth/AUTH_LOGIN_FAILURE";
// 토큰 재발행 요청
export const AUTH_TOKENREFRESH_REQUEST = "auth/AUTH_TOKENREFRESH_REQUEST";
export const AUTH_TOKENREFRESH_SUCCESS = "auth/AUTH_TOKENREFRESH_SUCCESS";
export const AUTH_TOKENREFRESH_FAILURE = "auth/AUTH_TOKENREFRESH_FAILURE";
// 로그아웃 요청
export const AUTH_LOGOUT_REQUEST = "auth/AUTH_LOGOUT_REQUEST";
export const AUTH_LOGOUT_SUCCESS = "auth/AUTH_LOGOUT_SUCCESS";
export const AUTH_LOGOUT_FAILURE = "auth/AUTH_LOGOUT_FAILURE";

// 사용자 가입
export interface IAuthCreateRequest {
  type: typeof AUTH_CREATE_REQUEST;
  payload: {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  callback: () => void;
}
// 로그인 요청
export interface IAuthLoginRequest {
  type: typeof AUTH_LOGIN_REQUEST;
  payload: { email: string; password: string };
}
// 토큰 재발행 요청
export interface IAuthTokenrefreshRequest {
  type: typeof AUTH_TOKENREFRESH_REQUEST;
}
// 로그아웃 요청
export interface IAuthLogoutRequest {
  type: typeof AUTH_LOGOUT_REQUEST;
  payload: { email: string };
}

export type IAuthAction =
  | IAuthCreateRequest
  | IAuthLoginRequest
  | IAuthTokenrefreshRequest
  | IAuthLogoutRequest;
