import { createReducer } from "typesafe-actions";
import {
  AUTH_CREATE_SUCCESS,
  AUTH_LOGIN_SUCCESS,
  AUTH_TOKENREFRESH_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
  AUTH_DELETE_SUCCESS,
} from "./types";

const initialState: IAuthState = {
  isLogged: !!localStorage.getItem("token"),
  isAdmin: false,
  me: {
    email: localStorage.getItem("email") || "",
    userName: localStorage.getItem("userName") || "",
  },
};

export default createReducer(initialState, {
  // 회원가입 성공
  [AUTH_CREATE_SUCCESS]: (state, action) => {
    return {
      ...state,
    };
  },
  // 로그인 성공
  [AUTH_LOGIN_SUCCESS]: (state, action) => {
    const { email, userName } = action.payload.response;
    return {
      isLogged: true,
      isAdmin: true,
      me: {
        email,
        userName,
      },
    };
  },
  // 토큰 재발행 성공
  [AUTH_TOKENREFRESH_SUCCESS]: (state, action) => ({
    isLogged: false,
    isAdmin: false,
    me: {
      userName: "",
      email: "",
    },
  }),
  // 로그아웃 성공
  [AUTH_LOGOUT_SUCCESS]: (state, action) => {
    return {
      isLogged: false,
      isAdmin: false,
      me: {
        userName: "",
        email: "",
      },
    };
  },
  [AUTH_DELETE_SUCCESS]: (state, action) => {
    return {
      ...state,
    };
  },
});
