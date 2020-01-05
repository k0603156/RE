export const GET_USER = "user/GET_USER";
export const GET_USER_SUCCESS = "user/GET_USER_SUCCESS";
export const GET_USER_FAILURE = "user/GET_USER_FAILURE";

export interface get_user_action {
  type: typeof GET_USER;
  payload: { userName: string };
}

export type USER_ACTION_TYPES = get_user_action;
