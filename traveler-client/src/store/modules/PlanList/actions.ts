import { SELECT_PLAN_LIST_REQUEST, PLAN_LIST_ACTION_TYPES } from "./types";

//** CREATE ACTION **//

//포스트 리스트 읽기요청
export function select_plan_list(): PLAN_LIST_ACTION_TYPES {
  return {
    type: SELECT_PLAN_LIST_REQUEST,
    payload: {}
  };
}
