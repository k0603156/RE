import { createReducer } from "typesafe-actions";
import { SELECT_PLAN_LIST_SUCCESS } from "./types";

const initialState = {};

const PlanListReducer = createReducer(initialState, {
  // 플랜리스트 요청
  [SELECT_PLAN_LIST_SUCCESS]: (state, action: any) => {
    return {
      initialState
    };
  }
});
export default PlanListReducer;
