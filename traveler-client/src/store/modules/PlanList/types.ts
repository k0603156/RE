//플랜 리스트 읽기요청
export const SELECT_PLAN_LIST_REQUEST = "planlist/SELECT_PLAN_LIST_REQUEST";
export const SELECT_PLAN_LIST_SUCCESS = "planlist/SELECT_PLAN_LIST_SUCCESS";
export const SELECT_PLAN_LIST_FAILURE = "planlist/SELECT_PLAN_LIST_FAILURE";

//플랜 리스트 읽기요청
export interface select_plan_list_request {
  type: typeof SELECT_PLAN_LIST_REQUEST;
  payload: {};
}

export type PLAN_LIST_ACTION_TYPES = select_plan_list_request;
