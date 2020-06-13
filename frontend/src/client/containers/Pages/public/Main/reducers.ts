import { createReducer } from "typesafe-actions";
import {
  BOARD_SELECT_TRIGGER,
  BOARDLIST_BROWSE_SUCCESS,
  POSTLIST_BROWSE_SUCCESS,
  InitialState,
} from "./types";

const initialState: InitialState = {
  boardId: 1,
  boards: [],
  posts: [],
};

export default createReducer(initialState, {
  [BOARD_SELECT_TRIGGER]: (state, action) => {
    return {
      ...state,
      boardId: Number(action.payload.boardId),
    };
  },
  [BOARDLIST_BROWSE_SUCCESS]: (state, action) => {
    return {
      ...state,
      boards: action.payload.response,
    };
  },
  [POSTLIST_BROWSE_SUCCESS]: (state, action) => {
    return {
      ...state,
      posts: action.payload.response,
    };
  },
});
