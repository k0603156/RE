import {
  LOGIN_AUTH_REQUEST,
  LOGIN_AUTH_SUCCESS,
  CHECK_OTP_AUTH_REQUEST,
  CHANGE_TOKEN_AUTH_REQUEST,
  LOGOUT_AUTH_REQUEST,
  LOGOUT_AUTH_SUCCESS,
  login_action,
  logout_action,
  LOGIN_AUTH_FAILURE,
  LOGOUT_AUTH_FAILURE
} from "./types";
import { Auth } from "Api";
import { createError } from "../Error";
import { startLoading, finishLoading } from "../Loading";
import { takeLatest, put, call } from "redux-saga/effects";
import createRequestSaga from "../../lib/createRequestSaga";

// 로그인 요청
export function* loginSaga(data: login_action): Generator {
  yield put(startLoading(data.type));
  const payload = {
    email: data.payload.email,
    password: data.payload.password
  };
  try {
    const response: any = yield call(Auth.authenticate, payload);

    yield put({ type: LOGIN_AUTH_SUCCESS, payload: response.data });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("userName", response.data.userName);
    localStorage.setItem("email", response.data.email);
  } catch (error) {
    yield put(createError(LOGIN_AUTH_FAILURE, error));
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("email");
  }
  yield put(finishLoading(data.type));
}
// 로그아웃 요청
export function* logoutSaga(data: logout_action): Generator {
  yield put(startLoading(data.type));
  const payload = {
    email: data.payload.email
  };
  try {
    const response: any = yield call(Auth.deauthorize, payload);
    if (response.status === 200) {
      yield put({ type: LOGOUT_AUTH_SUCCESS, payload: response.data });
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("email");
    }
  } catch (error) {
    yield put(createError(LOGOUT_AUTH_FAILURE, error));
  }
  yield put(finishLoading(data.type));
}

// OTP 체크 요청
const checkOTPSaga = createRequestSaga(CHECK_OTP_AUTH_REQUEST, Auth.authorize);
// 토큰 재발행 요청
const changeTokenSaga = createRequestSaga(
  CHANGE_TOKEN_AUTH_REQUEST,
  Auth.reauthorize
);

function* authSaga(): Generator {
  yield takeLatest(LOGIN_AUTH_REQUEST, loginSaga);
  yield takeLatest(CHECK_OTP_AUTH_REQUEST, checkOTPSaga);
  yield takeLatest(CHANGE_TOKEN_AUTH_REQUEST, changeTokenSaga);
  yield takeLatest(LOGOUT_AUTH_REQUEST, logoutSaga);
}
export default authSaga;
