import {
  lOGIN_AUTH,
  lOGIN_AUTH_SUCCESS,
  CHECK_OTP_AUTH,
  CHECK_OTP_AUTH_SUCCESS,
  CHANGE_TOKEN_AUTH,
  CHANGE_TOKEN_AUTH_SUCCESS,
  LOGOUT_AUTH,
  LOGOUT_AUTH_SUCCESS
} from "./types";
import { Auth } from "Api";
import { createReducer } from "typesafe-actions";
import { takeEvery } from "redux-saga/effects";
import createRequestSaga from "../../lib/createRequestSaga";

const loginSaga = createRequestSaga(lOGIN_AUTH, Auth.authenticate);
const checkOTPSaga = createRequestSaga(CHECK_OTP_AUTH, Auth.authorize);
const changeTokenSaga = createRequestSaga(CHANGE_TOKEN_AUTH, Auth.reauthorize);
const logoutSaga = createRequestSaga(LOGOUT_AUTH, Auth.deauthorize);

export function* authSaga(): Generator {
  yield takeEvery(lOGIN_AUTH, loginSaga);
  yield takeEvery(CHECK_OTP_AUTH, checkOTPSaga);
  yield takeEvery(CHANGE_TOKEN_AUTH, changeTokenSaga);
  yield takeEvery(LOGOUT_AUTH, logoutSaga);
}

const InitAuth = {
  isLogged: false,
  user: {
    userName: "",
    email: ""
  }
};

const AuthReducer = createReducer(InitAuth, {
  [lOGIN_AUTH_SUCCESS]: (state, action) => {
    localStorage.setItem("token", action.payload.token);
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
