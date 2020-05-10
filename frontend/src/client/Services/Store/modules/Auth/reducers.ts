import { createReducer } from "typesafe-actions";
import {
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNIN_SUCCESS,
  AUTH_TOKENREFRESH_SUCCESS,
  AUTH_SIGNOUT_SUCCESS,
  AUTH_DROPOUT_SUCCESS,
  InitialState,
} from "./types";

const initialState: InitialState = {
  isLogged: !!localStorage.getItem("token"),
  isAdmin: false,
  me: {
    email: localStorage.getItem("email") || "",
    userName: localStorage.getItem("userName") || "",
  },
};

export default createReducer(initialState, {
  // 회원가입 성공
  [AUTH_SIGNUP_SUCCESS]: (state) => {
    return {
      ...state,
    };
  },
  // 로그인 성공
  [AUTH_SIGNIN_SUCCESS]: (state, action) => {
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
  [AUTH_TOKENREFRESH_SUCCESS]: () => ({
    isLogged: false,
    isAdmin: false,
    me: {
      userName: "",
      email: "",
    },
  }),
  // 로그아웃 성공
  [AUTH_SIGNOUT_SUCCESS]: () => {
    return {
      isLogged: false,
      isAdmin: false,
      me: {
        userName: "",
        email: "",
      },
    };
  },
  [AUTH_DROPOUT_SUCCESS]: (state) => {
    return {
      ...state,
    };
  },
});
