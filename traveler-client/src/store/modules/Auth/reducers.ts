import {
  lOGIN_AUTH_SUCCESS,
  CHECK_OTP_AUTH_SUCCESS,
  CHANGE_TOKEN_AUTH_SUCCESS,
  LOGOUT_AUTH_SUCCESS
} from "./types";

import { createReducer } from "typesafe-actions";

const initialState = {
  isLogged: !!localStorage.getItem("token"),
  user: {
    userName: localStorage.getItem("userName") || "",
    email: localStorage.getItem("email") || ""
  }
};

const AuthReducer = createReducer(initialState, {
  [lOGIN_AUTH_SUCCESS]: (state, action) => {
    localStorage.setItem("token", action.payload.token);
    localStorage.setItem("userName", action.payload.userName);
    localStorage.setItem("email", action.payload.email);
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
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("email");
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
