// 로그인 요청
export const LOGIN_AUTH_REQUEST = "auth/AUTHENTICATE_REQUEST";
export const LOGIN_AUTH_SUCCESS = "auth/AUTHENTICATE_SUCCESS";
export const LOGIN_AUTH_FAILURE = "auth/AUTHENTICATE_FAILURE";
// OTP 확인 요청
export const CHECK_OTP_AUTH_REQUEST = "auth/AUTHORIZE_REQUEST";
export const CHECK_OTP_AUTH_SUCCESS = "auth/AUTHORIZE_SUCCESS";
export const CHECK_OTP_AUTH_FAILURE = "auth/AUTHORIZE_FAILURE";
// 토큰 재발행 요청
export const CHANGE_TOKEN_AUTH_REQUEST = "auth/REAUTHORIZE_REQUEST";
export const CHANGE_TOKEN_AUTH_SUCCESS = "auth/REAUTHORIZE_SUCCESS";
export const CHANGE_TOKEN_AUTH_FAILURE = "auth/REAUTHORIZE_FAILURE";
// 로그아웃 요청
export const LOGOUT_AUTH_REQUEST = "auth/DEAUTHORIZE_REQUEST";
export const LOGOUT_AUTH_SUCCESS = "auth/DEAUTHORIZE_SUCCESS";
export const LOGOUT_AUTH_FAILURE = "auth/DEAUTHORIZE_FAILURE";

// 로그인 요청
export interface login_action {
  type: typeof LOGIN_AUTH_REQUEST;
  payload: { email: string; password: string };
}
// OTP 확인 요청
interface check_otp_action {
  type: typeof CHECK_OTP_AUTH_REQUEST;
  payload: { otp: string };
}
// 토큰 재발행 요청
interface change_token_action {
  type: typeof CHANGE_TOKEN_AUTH_REQUEST;
}
// 로그아웃 요청
export interface logout_action {
  type: typeof LOGOUT_AUTH_REQUEST;
  payload: { email: string };
}

export type AUTH_ACTION_TYPES =
  | login_action
  | check_otp_action
  | change_token_action
  | logout_action;
