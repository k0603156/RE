import { BOARDLIST_BROWSE_SUCCESS, IMainState } from "./types";
import { createReducer } from "typesafe-actions";

const initialState: IMainState = {
  selectedBoard: "",
  boardlist: [],
  postlist: []
};

export default createReducer(initialState, {
  [BOARDLIST_BROWSE_SUCCESS]: (state, action) => {
    return {
      ...state,
      boardlist: action.payload.response
    };
  }
});
