import {
  AUTH_LOGIN_REQUEST,
  AUTH_TOKENREFRESH_REQUEST,
  AUTH_LOGOUT_REQUEST,
  IAuthAction
} from "./types";

//** CREATE ACTION **//
// 로그인 요청
export function authLoginAction(email: string, password: string): IAuthAction {
  return {
    type: AUTH_LOGIN_REQUEST,
    payload: {
      email,
      password
    }
  };
}
// 토큰 재발행 요청
export function authTokenrefreshAction(): IAuthAction {
  return {
    type: AUTH_TOKENREFRESH_REQUEST
  };
}
// 로그아웃 요청
export function authLogoutAction(email: string): IAuthAction {
  return {
    type: AUTH_LOGOUT_REQUEST,
    payload: { email }
  };
}
