import {
  LOGIN_AUTH_REQUEST,
  CHECK_OTP_AUTH_REQUEST,
  CHANGE_TOKEN_AUTH_REQUEST,
  LOGOUT_AUTH_REQUEST,
  LOGIN_AUTH_SUCCESS,
  LOGOUT_AUTH_SUCCESS,
  LOGIN_AUTH_FAILURE,
  LOGOUT_AUTH_FAILURE,
  login_action,
  logout_action
} from "./types";
import Api from "@Client/Api";
import { createMSG } from "../Msg";
import { startLoading, finishLoading } from "../Loading";
import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import createRequestSaga from "@Store/lib/createRequestSaga";

// 로그인 요청
export function* loginSaga(data: login_action): Generator {
  yield put(startLoading(data.type));
  const payload = {
    email: data.payload.email,
    password: data.payload.password
  };
  try {
    const response: any = yield call(Api.auth.authenticate, payload);

    yield put({ type: LOGIN_AUTH_SUCCESS, payload: response.data });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("userName", response.data.userName);
    localStorage.setItem("email", response.data.email);
    yield put(
      createMSG(LOGIN_AUTH_FAILURE, "ALERT", { message: "로그인되었습니다." })
    );
  } catch (error) {
    yield put(createMSG(LOGIN_AUTH_FAILURE, "ERROR", error));
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
    const response: any = yield call(Api.auth.deauthorize, payload);
    if (response.status === 200) {
      yield put({ type: LOGOUT_AUTH_SUCCESS, payload: response.data });
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("email");
    }
  } catch (error) {
    yield put(createMSG(LOGOUT_AUTH_FAILURE, "ERROR", error));
  }
  yield put(finishLoading(data.type));
}

// OTP 체크 요청
const checkOTPSaga = createRequestSaga(
  CHECK_OTP_AUTH_REQUEST,
  Api.auth.authorize
);
// 토큰 재발행 요청
const changeTokenSaga = createRequestSaga(
  CHANGE_TOKEN_AUTH_REQUEST,
  Api.auth.reauthorize
);

function* login() {
  yield takeLatest(LOGIN_AUTH_REQUEST, loginSaga);
}
function* checkOTP() {
  yield takeLatest(CHECK_OTP_AUTH_REQUEST, checkOTPSaga);
}
function* changeToken() {
  yield takeLatest(CHANGE_TOKEN_AUTH_REQUEST, changeTokenSaga);
}
function* logout() {
  yield takeLatest(LOGOUT_AUTH_REQUEST, logoutSaga);
}
function* authSaga(): Generator {
  yield all([fork(login), fork(checkOTP), fork(changeToken), fork(logout)]);
}

export default authSaga;
