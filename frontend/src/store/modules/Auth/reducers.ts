import {
  LOGIN_AUTH_SUCCESS,
  CHECK_OTP_AUTH_SUCCESS,
  CHANGE_TOKEN_AUTH_SUCCESS,
  LOGOUT_AUTH_SUCCESS
} from "./types";

import { createReducer } from "typesafe-actions";

const initialState: IAuthState = {
  isLogged: !!localStorage.getItem("token"),
  isAdmin: false,
  me: {
    email: localStorage.getItem("email") || "",
    userName: localStorage.getItem("userName") || ""
  }
};
// const initialState: IAuthState = {
//   isLogged: false,
//   isAdmin: true,
//   me: {
//     userName: "",
//     email: ""
//   }
// };

const AuthReducer = createReducer(initialState, {
  // 로그인 성공
  [LOGIN_AUTH_SUCCESS]: (state, action) => {
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
  // OTP 체크 성공
  [CHECK_OTP_AUTH_SUCCESS]: (state, action) => ({
    isLogged: true,
    isAdmin: false,
    me: {
      userName: "",
      email: ""
    }
  }),
  // 토큰 재발행 성공
  [CHANGE_TOKEN_AUTH_SUCCESS]: (state, action) => ({
    isLogged: false,
    isAdmin: false,
    me: {
      userName: "",
      email: ""
    }
  }),
  // 로그아웃 성공
  [LOGOUT_AUTH_SUCCESS]: (state, action) => {
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
export default AuthReducer;
