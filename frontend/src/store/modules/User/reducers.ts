import {
  USER_SELECT_SUCCESS,
  USER_CREATE_SUCCESS,
  USER_UPDATE_SUCCESS,
  USER_DELETE_SUCCESS,
} from "./types";

import { createReducer } from "typesafe-actions";

const initialState = { id: "", userName: "", posts: [] };

export default createReducer(initialState, {
  [USER_SELECT_SUCCESS]: (state, action) => {
    console.log(action);
    return {
      id: action.payload.response.id,
      userName: action.payload.response.userName,
      posts: action.payload.response.posts,
    };
  },
  [USER_CREATE_SUCCESS]: (state, action) => {
    return {
      ...state,
    };
  },
  [USER_UPDATE_SUCCESS]: (state, action) => {
    return {
      ...state,
    };
  },
  [USER_DELETE_SUCCESS]: (state, action) => {
    return {
      ...state,
    };
  },
});
