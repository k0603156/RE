import {
  LOGIN_AUTH,
  CHECK_OTP_AUTH,
  CHANGE_TOKEN_AUTH,
  LOGOUT_AUTH,
  AUTH_ACTION_TYPES
} from "./types";

//** CREATE ACTION **//
// 로그인 요청
export function login(email: string, password: string): AUTH_ACTION_TYPES {
  return {
    type: LOGIN_AUTH,
    payload: {
      email,
      password
    }
  };
}
// OTP 확인 요청
export function check_otp(otp: string): AUTH_ACTION_TYPES {
  return {
    type: CHECK_OTP_AUTH,
    payload: { otp }
  };
}
// 토큰 재발행 요청
export function change_token(): AUTH_ACTION_TYPES {
  return {
    type: CHANGE_TOKEN_AUTH
  };
}
// 로그아웃 요청
export function logout(email: string): AUTH_ACTION_TYPES {
  return {
    type: LOGOUT_AUTH,
    payload: { email }
  };
}
