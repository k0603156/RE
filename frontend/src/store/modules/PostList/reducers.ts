import { createReducer } from "typesafe-actions";
import { POSTLIST_BROWSE_SUCCESS } from "./types";

const initialState: { postList: any } = {
  postList: []
};

export default createReducer(initialState, {
  // 플랜리스트 요청
  [POSTLIST_BROWSE_SUCCESS]: (state, action: any) => {
    console.log(action);
    return {
      ...initialState,
      postList: [...action.payload.response]
    };
  }
});
