// 사용자 정보 요청
export const GET_USER = "user/GET_USER";
export const GET_USER_SUCCESS = "user/GET_USER_SUCCESS";
export const GET_USER_FAILURE = "user/GET_USER_FAILURE";
// 사용자 가입
export const CREATE_USER = "user/CREATE_USER";
export const CREATE_USER_SUCCESS = "user/CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "user/CREATE_USER_FAILURE";
// 사용자 정보수정
export const UPDATE_USER = "user/UPDATE_USER";
export const UPDATE_USER_SUCCESS = "user/UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "user/UPDATE_USER_FAILURE";
// 사용자 탈퇴
export const DELETE_USER = "user/DELETE_USER";
export const DELETE_USER_SUCCESS = "user/DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "user/DELETE_USER_FAILURE";

// 사용자 정보 요청
export interface get_user_action {
  type: typeof GET_USER;
  payload: {
    userName: string;
  };
}
// 사용자 가입
export interface create_user_action {
  type: typeof CREATE_USER;
  payload: {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  callback: () => void;
}
// 사용자 정보수정
export interface update_user_action {
  type: typeof UPDATE_USER;
  payload: {
    userName: string;
    password: string;
    confirmPassword: string;
  };
}
// 사용자 탈퇴
export interface delete_user_action {
  type: typeof DELETE_USER;
  payload: {
    email: string;
  };
}
export type USER_ACTION_TYPES =
  | get_user_action
  | create_user_action
  | update_user_action
  | delete_user_action;
