import {
  GET_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  USER_ACTION_TYPES
} from "./types";

//** CREATE ACTION **//
// 사용자 정보 확인
export function get_user(userName: string): USER_ACTION_TYPES {
  return {
    type: GET_USER,
    payload: {
      userName
    }
  };
}
// 사용자 생성
export function create_user(
  userName: string,
  email: string,
  password: string,
  confirmPassword: string,
  callback: () => void
): USER_ACTION_TYPES {
  return {
    type: CREATE_USER,
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
export function update_user(
  userName: string,
  password: string,
  confirmPassword: string
): USER_ACTION_TYPES {
  return {
    type: UPDATE_USER,
    payload: {
      userName,
      password,
      confirmPassword
    }
  };
}
// 사용자 탈퇴
export function delete_user(email: string): USER_ACTION_TYPES {
  return {
    type: DELETE_USER,
    payload: {
      email
    }
  };
}
