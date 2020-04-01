import {
  BOARD_SELECT_MUTATE,
  BOARDLIST_BROWSE_SUCCESS,
  POSTLIST_BROWSE_SUCCESS,
  IMainState
} from "./types";
import { createReducer } from "typesafe-actions";

const initialState: IMainState = {
  selectedBoard: "1",
  boardlist: [],
  postlist: []
};

export default createReducer(initialState, {
  [BOARD_SELECT_MUTATE]: (state, action) => {
    return {
      ...state,
      selectedBoard: action.payload.boardId
    };
  },
  [BOARDLIST_BROWSE_SUCCESS]: (state, action) => {
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
