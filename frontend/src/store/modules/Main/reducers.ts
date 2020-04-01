import {
  BOARDLIST_BROWSE_SUCCESS,
  POSTLIST_BROWSE_SUCCESS,
  IMainState
} from "./types";
import { createReducer } from "typesafe-actions";

const initialState: IMainState = {
  selectedBoard: "2",
  boardlist: [],
  postlist: []
};

export default createReducer(initialState, {
  [BOARDLIST_BROWSE_SUCCESS]: (state, action) => {
    console.log(action);
    return {
      ...state,
      boardlist: action.payload.response
    };
  },
  [POSTLIST_BROWSE_SUCCESS]: (state, action) => {
    console.log(action);
    return {
      ...state,
      postlist: action.payload.response
    };
  }
});
