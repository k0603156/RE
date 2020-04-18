import { createReducer } from "typesafe-actions";
import { BOARD_BROWSE_SUCCESS, InitialState } from "./types";

const initialState: InitialState = {
  count: 0,
  rows: [],
};

export default createReducer(initialState, {
  // 게시글리스트 요청
  [BOARD_BROWSE_SUCCESS]: (state, action: any) => {
    console.log(action);
    return {
      ...initialState,
      ...action.payload.response,
    };
  },
});
