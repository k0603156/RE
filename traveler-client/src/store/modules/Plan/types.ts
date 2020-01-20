//스토리 헤더작성
export const INPUT_PLAN_HEADER_MUTATE = "plan/INPUT_PLAN_HEADER_MUTATE";
//스토리 작성
export const INPUT_PLAN_STORY_MUTATE = "plan/INPUT_PLAN_STORY_MUTATE";
//스토리 개수증가
export const INCREASE_PLAN_STORY_MUTATE = "plan/INCREASE_PLAN_STORY_MUTATE";
export const INCREASE_PLAN_STORY_SUCCESS = "plan/INCREASE_PLAN_STORY_SUCCESS";
export const INCREASE_PLAN_STORY_FAILURE = "plan/INCREASE_PLAN_STORY_FAILURE";
//스토리 개수감소
export const DECREASE_PLAN_STORY_MUTATE = "plan/DECREASE_PLAN_STORY_MUTATE";
export const DECREASE_PLAN_STORY_SUCCESS = "plan/DECREASE_PLAN_STORY_SUCCESS";
export const DECREASE_PLAN_STORY_FAILURE = "plan/DECREASE_PLAN_STORY_FAILURE";
//플랜 생성요청
export const CREATE_PLAN_REQUEST = "plan/CREATE_PLAN_REQUEST";
export const CREATE_PLAN_SUCCESS = "plan/CREATE_PLAN_SUCCESS";
export const CREATE_PLAN_FAILURE = "plan/CREATE_PLAN_FAILURE";
//플랜 읽기요청
export const SELECT_PLAN_REQUEST = "plan/SELECT_PLAN_REQUEST";
export const SELECT_PLAN_SUCCESS = "plan/SELECT_PLAN_SUCCESS";
export const SELECT_PLAN_FAILURE = "plan/SELECT_PLAN_FAILURE";
//플랜 업데이트요청
export const UPDATE_PLAN_REQUEST = "plan/UPDATE_PLAN_REQUEST";
export const UPDATE_PLAN_SUCCESS = "plan/UPDATE_PLAN_SUCCESS";
export const UPDATE_PLAN_FAILURE = "plan/UPDATE_PLAN_FAILURE";
//플랜 삭제요청
export const DELETE_PLAN_REQUEST = "plan/DELETE_PLAN_REQUEST";
export const DELETE_PLAN_SUCCESS = "plan/DELETE_PLAN_SUCCESS";
export const DELETE_PLAN_FAILURE = "plan/DELETE_PLAN_FAILURE";

//스토리 헤더작성
export interface input_plan_header_mutate {
  type: typeof INPUT_PLAN_HEADER_MUTATE;
  payload: {
    entry: "title" | "country" | "fromDate" | "toDate" | "subTitle" | "image";
    data: string | number;
  };
}
//스토리 작성
export interface input_plan_story_mutate {
  type: typeof INPUT_PLAN_STORY_MUTATE;
  payload: {
    contentIndex: number;
    entry: "title" | "date" | "body" | "image";
    data: string;
  };
}
//스토리 개수증가
export interface increase_plan_story_mutate {
  type: typeof INCREASE_PLAN_STORY_MUTATE;
  payload: {};
}
//스토리 개수감소
export interface decrease_plan_story_mutate {
  type: typeof DECREASE_PLAN_STORY_MUTATE;
  payload: {
    contentIndex: number;
  };
}
//플랜 생성요청
export interface create_plan_request {
  type: typeof CREATE_PLAN_REQUEST;
  payload: {
    plan: any;
  };
}
//플랜 읽기요청
export interface select_plan_request {
  type: typeof SELECT_PLAN_REQUEST;
  payload: {
    planIndex: number;
  };
}
//플랜 업데이트요청
export interface update_plan_request {
  type: typeof UPDATE_PLAN_REQUEST;
  payload: {
    planIndex: number;
    plan: any;
    storyArr: any;
  };
}
//플랜 삭제요청
export interface delete_plan_request {
  type: typeof DELETE_PLAN_REQUEST;
  payload: {
    planIndex: number;
  };
}
export type PLAN_ACTION_TYPES =
  | input_plan_header_mutate
  | input_plan_story_mutate
  | increase_plan_story_mutate
  | decrease_plan_story_mutate
  | create_plan_request
  | select_plan_request
  | update_plan_request
  | delete_plan_request;
