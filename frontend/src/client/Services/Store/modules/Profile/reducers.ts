import {
  PROFILE_SELECT_SUCCESS,
  PROFILE_UPDATE_SUCCESS,
  InitialState,
} from "./types";
import { createReducer } from "typesafe-actions";

const initialState: InitialState = { id: 0, userName: "", posts: [] };

export default createReducer(initialState, {
  [PROFILE_SELECT_SUCCESS]: (state, action) => {
    return {
      id: action.payload.response.id,
      userName: action.payload.response.userName,
      posts: action.payload.response.posts,
    };
  },

  [PROFILE_UPDATE_SUCCESS]: (state, action) => {
    return {
      ...state,
    };
  },
});
