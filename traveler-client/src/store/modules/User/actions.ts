import { CREATE_USER, USER_ACTION_TYPES } from "./types";

//Action Creator
export function create_user(
  userName: string,
  email: string,
  password: string,
  confirmPassword: string
): USER_ACTION_TYPES {
  return {
    type: CREATE_USER,
    payload: {
      userName,
      email,
      password,
      confirmPassword
    }
  };
}
