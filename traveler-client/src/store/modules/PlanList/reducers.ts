import { createReducer } from "typesafe-actions";
import { SELECT_BOARD_LIST_SUCCESS, SELECT_PLAN_LIST_SUCCESS } from "./types";

//boardList 계획 작성시 분류 선택할 때 SELECT 태그에 들어감
const initialState = {
  boardList: [],
  planList: []
};

const PlanListReducer = createReducer(initialState, {
  // 보드리스트 요청
  [SELECT_BOARD_LIST_SUCCESS]: (state, action: any) => {
    return {
      ...initialState
    };
  },
  // 플랜리스트 요청
  [SELECT_PLAN_LIST_SUCCESS]: (state, action: any) => {
    return {
      ...initialState
    };
  }
});
export default PlanListReducer;
