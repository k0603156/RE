import { createReducer } from "typesafe-actions";
import {
  AUTH_LOGIN_SUCCESS,
  AUTH_TOKENREFRESH_SUCCESS,
  AUTH_LOGOUT_SUCCESS
} from "./types";

const initialState: IAuthState = {
  isLogged: !!localStorage.getItem("token"),
  isAdmin: false,
  me: {
    email: localStorage.getItem("email") || "",
    userName: localStorage.getItem("userName") || ""
  }
};
export default createReducer(initialState, {
  // 로그인 성공
  [AUTH_LOGIN_SUCCESS]: (state, action) => {
    console.log(action);
    const { email, userName } = action.payload.response;
    return {
      isLogged: true,
      isAdmin: true,
      me: {
        email,
        userName
      }
    };
  },
  // 토큰 재발행 성공
  [AUTH_TOKENREFRESH_SUCCESS]: (state, action) => ({
    isLogged: false,
    isAdmin: false,
    me: {
      userName: "",
      email: ""
    }
  }),
  // 로그아웃 성공
  [AUTH_LOGOUT_SUCCESS]: (state, action) => {
    return {
      isLogged: false,
      isAdmin: false,
      me: {
        userName: "",
        email: ""
      }
    };
  }
});
