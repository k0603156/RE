import {
  USER_SELECT_SUCCESS,
  USER_CREATE_SUCCESS,
  USER_UPDATE_SUCCESS,
  USER_DELETE_SUCCESS
} from "./types";

import { createReducer } from "typesafe-actions";

const initialState = { userName: "" };

const UserReducer = createReducer(initialState, {
  [USER_SELECT_SUCCESS]: (state, action) => {
    console.log(action.payload.result);
    return {
      userName: action.payload.result.userName
    };
  },
  [USER_CREATE_SUCCESS]: (state, action) => {
    return {
      ...state
    };
  },
  [USER_UPDATE_SUCCESS]: (state, action) => {
    return {
      ...state
    };
  },
  [USER_DELETE_SUCCESS]: (state, action) => {
    return {
      ...state
    };
  }
});
export default UserReducer;
