import { createReducer } from "typesafe-actions";
import { LOADING_START, LOADING_FINISH, initialState } from "./types";

export default createReducer(initialState, {
  [LOADING_START]: (state, action) => ({
    ...state,
    [action.payload]: true,
  }),
  [LOADING_FINISH]: (state, action) => ({
    ...state,
    [action.payload]: false,
  }),
});
