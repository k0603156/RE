// 사용자 정보 요청
export const SELECT_USER_REQUEST = "user/SELECT_USER_REQUEST";
export const SELECT_USER_SUCCESS = "user/SELECT_USER_SUCCESS";
export const SELECT_USER_FAILURE = "user/SELECT_USER_FAILURE";
// 사용자 가입
export const CREATE_USER_REQUEST = "user/CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "user/CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "user/CREATE_USER_FAILURE";
// 사용자 정보수정
export const UPDATE_USER_REQUEST = "user/UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "user/UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "user/UPDATE_USER_FAILURE";
// 사용자 탈퇴
export const DELETE_USER_REQUEST = "user/DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "user/DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "user/DELETE_USER_FAILURE";

// 사용자 정보 요청
export interface select_user_action {
  type: typeof SELECT_USER_REQUEST;
  payload: {
    userName: string;
  };
}
// 사용자 가입
export interface create_user_action {
  type: typeof CREATE_USER_REQUEST;
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
  type: typeof UPDATE_USER_REQUEST;
  payload: {
    userName: string;
    password: string;
    confirmPassword: string;
  };
}
// 사용자 탈퇴
export interface delete_user_action {
  type: typeof DELETE_USER_REQUEST;
  payload: {
    email: string;
  };
}
export type USER_ACTION_TYPES =
  | select_user_action
  | create_user_action
  | update_user_action
  | delete_user_action;
