import {
  BOARD_SELECT_TRIGGER,
  BOARDLIST_BROWSE_SUCCESS,
  POSTLIST_BROWSE_SUCCESS,
  InitialState,
} from "./types";
import { createReducer } from "typesafe-actions";

const initialState: InitialState = {
  selectedBoard: 1,
  boardlist: [],
  postlist: [],
};

export default createReducer(initialState, {
  [BOARD_SELECT_TRIGGER]: (state, action) => {
    return {
      ...state,
      selectedBoard: parseInt(action.payload.boardId),
    };
  },
  [BOARDLIST_BROWSE_SUCCESS]: (state, action) => {
    return {
      ...state,
      boardlist: action.payload.response,
    };
  },
  [POSTLIST_BROWSE_SUCCESS]: (state, action) => {
    console.log(action);
    return {
      ...state,
      postlist: action.payload.response,
    };
  },
});
