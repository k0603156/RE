import {
  SELECT_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS
} from "./types";

import { createReducer } from "typesafe-actions";

const initialState = { userName: "" };

const UserReducer = createReducer(initialState, {
  [SELECT_USER_SUCCESS]: (state, action) => {
    return {
      userName: action.payload.userName
    };
  },
  [CREATE_USER_SUCCESS]: (state, action) => {
    return {
      ...state
    };
  },
  [UPDATE_USER_SUCCESS]: (state, action) => {
    return {
      ...state
    };
  },
  [DELETE_USER_SUCCESS]: (state, action) => {
    return {
      ...state
    };
  }
});
export default UserReducer;
