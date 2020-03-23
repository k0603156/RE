import { createReducer } from "typesafe-actions";
import { POSTLIST_BROWSE_SUCCESS } from "./types";

const initialState = {
  planList: []
};

export default createReducer(initialState, {
  // 플랜리스트 요청
  [POSTLIST_BROWSE_SUCCESS]: (state, action: any) => {
    return {
      ...initialState
    };
  }
});
