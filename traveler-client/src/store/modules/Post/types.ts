//콘텐츠작성
export const SET_CONTENT = "post/SET_CONTENT";
//콘텐츠개수증가
export const ADD_CONTENT = "post/ADD_CONTENT";
//콘텐츠개수감소
export const REMOVE_CONTENT = "post/REMOVE_CONTENT";
//포스트 생성요청
export const CREATE_POST = "post/CREATE_POST";
export const CREATE_POST_SUCCESS = "post/CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "post/CREATE_POST_FAILURE";
//포스트 읽기요청
export const GET_POST = "post/GET_POST";
export const GET_POST_SUCCESS = "post/GET_POST_SUCCESS";
export const GET_POST_FAILURE = "post/GET_POST_FAILURE";
//포스트 업데이트요청
export const UPDATE_POST = "post/UPDATE_POST";
export const UPDATE_POST_SUCCESS = "post/UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILURE = "post/UPDATE_POST_FAILURE";
//포스트 삭제요청
export const DELETE_POST = "post/DELETE_POST";
export const DELETE_POST_SUCCESS = "post/DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "post/DELETE_POST_FAILURE";

//콘텐츠작성
export interface set_content_action {
  type: typeof SET_CONTENT;
  payload: {};
}

//콘텐츠개수증가
export interface add_content_action {
  type: typeof ADD_CONTENT;
  payload: {};
}
//콘텐츠개수감소
export interface remove_action {
  type: typeof REMOVE_CONTENT;
  payload: {};
}
//포스트 생성요청
export interface create_post_action {
  type: typeof CREATE_POST;
  payload: {
    post: any;
    contents: any;
  };
}
//포스트 읽기요청
export interface get_post_action {
  type: typeof GET_POST;
  payload: {
    postIndex: number;
  };
}
//포스트 업데이트요청
export interface update_post_action {
  type: typeof UPDATE_POST;
  payload: {
    postIndex: number;
    post: any;
    contents: any;
  };
}
//포스트 삭제요청
export interface delete_post_action {
  type: typeof DELETE_POST;
  payload: {
    postIndex: number;
  };
}
export type POST_ACTION_TYPES =
  | set_content_action
  | add_content_action
  | remove_action
  | create_post_action
  | get_post_action
  | update_post_action
  | delete_post_action;
