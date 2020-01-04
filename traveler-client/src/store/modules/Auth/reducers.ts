import {
  lOGIN_AUTH_SUCCESS,
  CHECK_OTP_AUTH_SUCCESS,
  CHANGE_TOKEN_AUTH_SUCCESS,
  LOGOUT_AUTH_SUCCESS
} from "./types";

import { createReducer } from "typesafe-actions";

const InitAuth = {
  isLogged: sessionStorage.getItem("token") ? true : false,
  user: {
    userName: sessionStorage.getItem("userName") || "",
    email: ""
  }
};

const AuthReducer = createReducer(InitAuth, {
  [lOGIN_AUTH_SUCCESS]: (state, action) => {
    sessionStorage.setItem("token", action.payload.token);
    sessionStorage.setItem("userName", action.payload.userName);
    return {
      isLogged: true,
      user: {
        userName: action.payload.userName,
        email: action.payload.email
      }
    };
  },
  [CHECK_OTP_AUTH_SUCCESS]: (state, action) => ({
    isLogged: true,
    user: {
      userName: "",
      email: ""
    }
  }),
  [CHANGE_TOKEN_AUTH_SUCCESS]: (state, action) => ({
    isLogged: false,
    user: {
      userName: "",
      email: ""
    }
  }),
  [LOGOUT_AUTH_SUCCESS]: (state, action) => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userName");
    return {
      isLogged: false,
      user: {
        userName: "",
        email: ""
      }
    };
  }
});
export default AuthReducer;
