import { CREATE_USER_SUCCESS } from "./types";
import { createReducer } from "typesafe-actions";

const InitUser = {};

const AuthReducer = createReducer(InitUser, {
  [CREATE_USER_SUCCESS]: (state, action) => {
    return {};
  }
});
export default AuthReducer;
