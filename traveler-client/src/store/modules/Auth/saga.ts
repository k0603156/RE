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
import { takeEvery, put, call } from "redux-saga/effects";
import createRequestSaga from "../../lib/createRequestSaga";

const checkOTPSaga = createRequestSaga(CHECK_OTP_AUTH, Auth.authorize);
const changeTokenSaga = createRequestSaga(CHANGE_TOKEN_AUTH, Auth.reauthorize);
const logoutSaga = createRequestSaga(LOGOUT_AUTH, Auth.deauthorize);

export function* loginSaga(data: login_action): Generator {
  const payload = {
    email: data.payload.email,
    password: data.payload.password
  };
  yield put(startLoading(data.type)); // 로딩 시작
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
  yield put(finishLoading(data.type)); // 로딩 끝
}

function* authSaga(): Generator {
  yield takeEvery(lOGIN_AUTH, loginSaga);
  yield takeEvery(CHECK_OTP_AUTH, checkOTPSaga);
  yield takeEvery(CHANGE_TOKEN_AUTH, changeTokenSaga);
  yield takeEvery(LOGOUT_AUTH, logoutSaga);
}
export default authSaga;
