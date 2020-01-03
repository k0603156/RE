export const lOGIN_AUTH = "auth/AUTHENTICATE";
export const lOGIN_AUTH_SUCCESS = "auth/AUTHENTICATE_SUCCESS";
export const lOGIN_AUTH_FAILURE = "auth/AUTHENTICATE_FAILURE";

export const CHECK_OTP_AUTH = "auth/AUTHORIZE";
export const CHECK_OTP_AUTH_SUCCESS = "auth/AUTHORIZE_SUCCESS";
export const CHECK_OTP_AUTH_FAILURE = "auth/AUTHORIZE_FAILURE";

export const CHANGE_TOKEN_AUTH = "auth/REAUTHORIZE";
export const CHANGE_TOKEN_AUTH_SUCCESS = "auth/REAUTHORIZE_SUCCESS";
export const CHANGE_TOKEN_AUTH_FAILURE = "auth/REAUTHORIZE_FAILURE";

export const LOGOUT_AUTH = "auth/DEAUTHORIZE";
export const LOGOUT_AUTH_SUCCESS = "auth/DEAUTHORIZE_SUCCESS";
export const LOGOUT_AUTH_FAILURE = "auth/DEAUTHORIZE_FAILURE";

interface login_action {
  type: typeof lOGIN_AUTH;
  payload: { email: string; password: string };
}
interface check_otp_action {
  type: typeof CHECK_OTP_AUTH;
  payload: { otp: string };
}
interface change_token_action {
  type: typeof CHANGE_TOKEN_AUTH;
}
interface logout_action {
  type: typeof LOGOUT_AUTH;
  payload: { email: string };
}

export type AUTH_ACTION_TYPES =
  | login_action
  | check_otp_action
  | change_token_action
  | logout_action;
