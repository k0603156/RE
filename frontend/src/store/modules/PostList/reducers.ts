import { createReducer } from "typesafe-actions";
import { POSTLIST_BROWSE_SUCCESS } from "./types";

const initialState: { count: number; rows: any } = {
  count: 0,
  rows: [],
};

export default createReducer(initialState, {
  // 게시글리스트 요청
  [POSTLIST_BROWSE_SUCCESS]: (state, action: any) => {
    console.log(action);
    return {
      ...initialState,
      ...action.payload.response,
    };
  },
});
