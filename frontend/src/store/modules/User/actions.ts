import {
  USER_SELECT_REQUEST,
  USER_CREATE_REQUEST,
  USER_UPDATE_REQUEST,
  USER_DELETE_REQUEST,
  IUserAction
} from "./types";

//** CREATE ACTION **//
// 사용자 정보 확인
export function userSelectAction(userName: string): IUserAction {
  return {
    type: USER_SELECT_REQUEST,
    payload: {
      userName
    }
  };
}
// 사용자 생성
export function userCreateAction(
  userName: string,
  email: string,
  password: string,
  confirmPassword: string,
  callback: () => void
): IUserAction {
  return {
    type: USER_CREATE_REQUEST,
    payload: {
      userName,
      email,
      password,
      confirmPassword
    },
    callback
  };
}
// 사용자 정보 수정
export function userUpdateAction(
  userName: string,
  password: string,
  confirmPassword: string
): IUserAction {
  return {
    type: USER_UPDATE_REQUEST,
    payload: {
      userName,
      password,
      confirmPassword
    }
  };
}
// 사용자 탈퇴
export function userDeleteAction(email: string): IUserAction {
  return {
    type: USER_DELETE_REQUEST,
    payload: {
      email
    }
  };
}
