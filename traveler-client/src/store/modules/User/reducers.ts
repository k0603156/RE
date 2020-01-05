import { GET_USER_SUCCESS } from "./types";

import { createReducer } from "typesafe-actions";

const initialState = { id: "", userName: "" };

const UserReducer = createReducer(initialState, {
  [GET_USER_SUCCESS]: (state, action) => {
    return {
      id: action.payload.id,
      userName: action.payload.userName
    };
  }
});
export default UserReducer;
