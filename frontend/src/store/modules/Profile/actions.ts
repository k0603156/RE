import {
  PROFILE_SELECT_REQUEST,
  PROFILE_UPDATE_REQUEST,
  IProfileAction,
} from "./types";

//** CREATE ACTION **//
// 사용자 정보 확인
export function profileSelectAction(userName: string): IProfileAction {
  return {
    type: PROFILE_SELECT_REQUEST,
    payload: {
      userName,
    },
  };
}

// 사용자 정보 수정
export function profileUpdateAction(
  userName: string,
  password: string,
  confirmPassword: string
): IProfileAction {
  return {
    type: PROFILE_UPDATE_REQUEST,
    payload: {
      userName,
      password,
      confirmPassword,
    },
  };
}
