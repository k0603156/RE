import {
  LOGIN_AUTH_REQUEST,
  CHECK_OTP_AUTH_REQUEST,
  CHANGE_TOKEN_AUTH_REQUEST,
  LOGOUT_AUTH_REQUEST,
  AUTH_ACTION_TYPES
} from "./types";

//** CREATE ACTION **//
// 로그인 요청
export function login(email: string, password: string): AUTH_ACTION_TYPES {
  return {
    type: LOGIN_AUTH_REQUEST,
    payload: {
      email,
      password
    }
  };
}
// OTP 확인 요청
export function check_otp(otp: string): AUTH_ACTION_TYPES {
  return {
    type: CHECK_OTP_AUTH_REQUEST,
    payload: { otp }
  };
}
// 토큰 재발행 요청
export function change_token(): AUTH_ACTION_TYPES {
  return {
    type: CHANGE_TOKEN_AUTH_REQUEST
  };
}
// 로그아웃 요청
export function logout(email: string): AUTH_ACTION_TYPES {
  return {
    type: LOGOUT_AUTH_REQUEST,
    payload: { email }
  };
}
