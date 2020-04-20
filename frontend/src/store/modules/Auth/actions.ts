import {
  AUTH_CREATE_REQUEST,
  AUTH_LOGIN_REQUEST,
  AUTH_TOKENREFRESH_REQUEST,
  AUTH_LOGOUT_REQUEST,
  AUTH_DELETE_REQUEST,
  IAuthAction,
} from "./types";

// 사용자 생성
export function authCreateAction(
  userName: string,
  email: string,
  password: string,
  confirmPassword: string,
  callback: () => void
): IAuthAction {
  return {
    type: AUTH_CREATE_REQUEST,
    payload: {
      userName,
      email,
      password,
      confirmPassword,
    },
    callback,
  };
}
//** CREATE ACTION **//
// 로그인 요청
export function authLoginAction(email: string, password: string): IAuthAction {
  return {
    type: AUTH_LOGIN_REQUEST,
    payload: {
      email,
      password,
    },
  };
}
// 토큰 재발행 요청
export function authTokenrefreshAction(): IAuthAction {
  return {
    type: AUTH_TOKENREFRESH_REQUEST,
  };
}
// 로그아웃 요청
export function authLogoutAction(email: string): IAuthAction {
  return {
    type: AUTH_LOGOUT_REQUEST,
    payload: { email },
  };
}
// 사용자 탈퇴
export function authDeleteAction(email: string): IAuthAction {
  return {
    type: AUTH_DELETE_REQUEST,
    payload: {
      email,
    },
  };
}
