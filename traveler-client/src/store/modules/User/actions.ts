import { GET_USER, USER_ACTION_TYPES } from "./types";

//Action Creator
export function get_user(userName: string): USER_ACTION_TYPES {
  return {
    type: GET_USER,
    payload: {
      userName
    }
  };
}
