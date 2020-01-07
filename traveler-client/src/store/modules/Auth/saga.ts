import {
  lOGIN_AUTH,
  lOGIN_AUTH_SUCCESS,
  CHECK_OTP_AUTH,
  CHANGE_TOKEN_AUTH,
  LOGOUT_AUTH,
  login_action
} from "./types";
import { Auth } from "Api";
import { requestFailure } from "../Error";
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
    console.log(response);
    yield put({ type: lOGIN_AUTH_SUCCESS, payload: response.data });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("userName", response.data.userName);
    localStorage.setItem("email", response.data.email);
  } catch (error) {
    yield put(requestFailure(error));
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("email");
  }
  yield put(finishLoading(data.type));
}
// OTP 체크 요청
const checkOTPSaga = createRequestSaga(CHECK_OTP_AUTH, Auth.authorize);
// 토큰 재발행 요청
const changeTokenSaga = createRequestSaga(CHANGE_TOKEN_AUTH, Auth.reauthorize);
// 로그아웃 요청
const logoutSaga = createRequestSaga(LOGOUT_AUTH, Auth.deauthorize);

function* authSaga(): Generator {
  yield takeLatest(lOGIN_AUTH, loginSaga);
  yield takeLatest(CHECK_OTP_AUTH, checkOTPSaga);
  yield takeLatest(CHANGE_TOKEN_AUTH, changeTokenSaga);
  yield takeLatest(LOGOUT_AUTH, logoutSaga);
}
export default authSaga;
