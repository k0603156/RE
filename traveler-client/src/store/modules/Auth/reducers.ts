import {
  lOGIN_AUTH_SUCCESS,
  CHECK_OTP_AUTH_SUCCESS,
  CHANGE_TOKEN_AUTH_SUCCESS,
  LOGOUT_AUTH_SUCCESS
} from "./types";

import { createReducer } from "typesafe-actions";

const initialState = {
  isLogged: !!localStorage.getItem("token"),
  me: {
    userName: localStorage.getItem("userName") || "",
    email: localStorage.getItem("email") || ""
  }
};

const AuthReducer = createReducer(initialState, {
  // 로그인 성공
  [lOGIN_AUTH_SUCCESS]: (state, action) => {
    localStorage.setItem("token", action.payload.token);
    localStorage.setItem("userName", action.payload.userName);
    localStorage.setItem("email", action.payload.email);
    return {
      isLogged: true,
      me: {
        userName: action.payload.userName,
        email: action.payload.email
      }
    };
  },
  // OTP 체크 성공
  [CHECK_OTP_AUTH_SUCCESS]: (state, action) => ({
    isLogged: true,
    me: {
      userName: "",
      email: ""
    }
  }),
  // 토큰 재발행 성공
  [CHANGE_TOKEN_AUTH_SUCCESS]: (state, action) => ({
    isLogged: false,
    me: {
      userName: "",
      email: ""
    }
  }),
  // 로그아웃 성공
  [LOGOUT_AUTH_SUCCESS]: (state, action) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("email");
    return {
      isLogged: false,
      me: {
        userName: "",
        email: ""
      }
    };
  }
});
export default AuthReducer;
