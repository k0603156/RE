import {
  UserDefault,
  UserDetail,
  lOGIN_USER,
  LOGOUT_USER,
  UserActionTypes
} from "./types";

export function loginUser(newUser: UserDetail): UserActionTypes {
  return {
    type: lOGIN_USER,
    payload: newUser
  };
}

// 타입추론 DeleteUserAction
export function logoutUser(newUser: UserDefault): UserActionTypes {
  return {
    type: LOGOUT_USER,
    payload: newUser
  };
}
