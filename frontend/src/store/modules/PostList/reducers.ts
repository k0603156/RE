import { createReducer } from "typesafe-actions";
import { POSTLIST_BROWSE_SUCCESS } from "./types";

const initialState: { board: any } = {
  board: []
};

export default createReducer(initialState, {
  // 플랜리스트 요청
  [POSTLIST_BROWSE_SUCCESS]: (state, action: any) => {
    console.log(action);
    return {
      ...initialState,
      board: [...action.payload.response]
    };
  }
});
