//게시글분류 리스트 요청
export const SELECT_BOARD_LIST_REQUEST = "planlist/SELECT_BOARD_LIST_REQUEST";
export const SELECT_BOARD_LIST_SUCCESS = "planlist/SELECT_BOARD_LIST_SUCCESS";
export const SELECT_BOARD_LIST_FAILURE = "planlist/SELECT_BOARD_LIST_FAILURE";
//플랜 리스트 요청
export const SELECT_PLAN_LIST_REQUEST = "planlist/SELECT_PLAN_LIST_REQUEST";
export const SELECT_PLAN_LIST_SUCCESS = "planlist/SELECT_PLAN_LIST_SUCCESS";
export const SELECT_PLAN_LIST_FAILURE = "planlist/SELECT_PLAN_LIST_FAILURE";

//게시글분류 리스트 요청
export interface select_board_list_request {
  type: typeof SELECT_BOARD_LIST_REQUEST;
  payload: {};
}
//플랜 리스트 요청
export interface select_plan_list_request {
  type: typeof SELECT_PLAN_LIST_REQUEST;
  payload: {};
}

export type PLAN_LIST_ACTION_TYPES =
  | select_board_list_request
  | select_plan_list_request;
