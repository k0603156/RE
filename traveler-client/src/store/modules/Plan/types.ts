//콘텐츠 헤더작성
export const INPUT_CONTENT_HEADER_MUTATE = "plan/INPUT_CONTENT_HEADER_MUTATE";
//콘텐츠작성
export const INPUT_CONTENT_BODY_MUTATE = "plan/INPUT_CONTENT_BODY_MUTATE";
//콘텐츠개수증가
export const INCREASE_CONTENT_MUTATE = "plan/INCREASE_CONTENT_MUTATE";
export const INCREASE_CONTENT_SUCCESS = "plan/INCREASE_CONTENT_SUCCESS";
export const INCREASE_CONTENT_FAILURE = "plan/INCREASE_CONTENT_FAILURE";
//콘텐츠개수감소
export const DECREASE_CONTENT_MUTATE = "plan/DECREASE_CONTENT_MUTATE";
export const DECREASE_CONTENT_SUCCESS = "plan/DECREASE_CONTENT_SUCCESS";
export const DECREASE_CONTENT_FAILURE = "plan/DECREASE_CONTENT_FAILURE";
//포스트 생성요청
export const CREATE_PLAN_REQUEST = "plan/CREATE_PLAN_REQUEST";
export const CREATE_PLAN_SUCCESS = "plan/CREATE_PLAN_SUCCESS";
export const CREATE_PLAN_FAILURE = "plan/CREATE_PLAN_FAILURE";
//포스트 읽기요청
export const SELECT_PLAN_REQUEST = "plan/SELECT_PLAN_REQUEST";
export const SELECT_PLAN_SUCCESS = "plan/SELECT_PLAN_SUCCESS";
export const SELECT_PLAN_FAILURE = "plan/SELECT_PLAN_FAILURE";
//포스트 업데이트요청
export const UPDATE_PLAN_REQUEST = "plan/UPDATE_PLAN_REQUEST";
export const UPDATE_PLAN_SUCCESS = "plan/UPDATE_PLAN_SUCCESS";
export const UPDATE_PLAN_FAILURE = "plan/UPDATE_PLAN_FAILURE";
//포스트 삭제요청
export const DELETE_PLAN_REQUEST = "plan/DELETE_PLAN_REQUEST";
export const DELETE_PLAN_SUCCESS = "plan/DELETE_PLAN_SUCCESS";
export const DELETE_PLAN_FAILURE = "plan/DELETE_PLAN_FAILURE";

//콘텐츠헤더작성
export interface input_content_header_mutate {
  type: typeof INPUT_CONTENT_HEADER_MUTATE;
  payload: {
    entry: "title" | "country" | "fromDate" | "toDate" | "subTitle" | "image";
    data: string | number;
  };
}
//콘텐츠작성
export interface input_content_body_mutate {
  type: typeof INPUT_CONTENT_BODY_MUTATE;
  payload: {
    contentIndex: number;
    entry: "title" | "date" | "body" | "image";
    data: string;
  };
}

//콘텐츠개수증가
export interface increase_content_mutate {
  type: typeof INCREASE_CONTENT_MUTATE;
  payload: {};
}
//콘텐츠개수감소
export interface decrease_content_mutate {
  type: typeof DECREASE_CONTENT_MUTATE;
  payload: {
    contentIndex: number;
  };
}
//포스트 생성요청
export interface create_plan_request {
  type: typeof CREATE_PLAN_REQUEST;
  payload: {
    plan: any;
    contentArr: any;
  };
}
//포스트 읽기요청
export interface select_plan_request {
  type: typeof SELECT_PLAN_REQUEST;
  payload: {
    planIndex: number;
  };
}
//포스트 업데이트요청
export interface update_plan_request {
  type: typeof UPDATE_PLAN_REQUEST;
  payload: {
    planIndex: number;
    plan: any;
    contentArr: any;
  };
}
//포스트 삭제요청
export interface delete_plan_request {
  type: typeof DELETE_PLAN_REQUEST;
  payload: {
    planIndex: number;
  };
}
export type PLAN_ACTION_TYPES =
  | input_content_header_mutate
  | input_content_body_mutate
  | increase_content_mutate
  | decrease_content_mutate
  | create_plan_request
  | select_plan_request
  | update_plan_request
  | delete_plan_request;
