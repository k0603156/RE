import { createReducer } from "typesafe-actions";
import { BOARD_SET_PAGE, BOARD_BROWSE_SUCCESS, InitialState } from "./types";

const initialState: InitialState = {
  page: 1,
  count: 0,
  rows: [],
};

export default createReducer(initialState, {
  [BOARD_SET_PAGE]: (state, action: any) => {
    return {
      ...state,
      page: action.payload.page,
    };
  },
  // 게시글리스트 요청
  [BOARD_BROWSE_SUCCESS]: (state, action: any) => {
    return {
      ...state,
      ...action.payload.response,
    };
  },
});
