import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import {
  AUTH_SIGNUP_REQUEST,
  AUTH_SIGNIN_REQUEST,
  AUTH_SIGNIN_SUCCESS,
  AUTH_SIGNIN_FAILURE,
  AUTH_TOKENREFRESH_REQUEST,
  AUTH_TOKENREFRESH_SUCCESS,
  AUTH_TOKENREFRESH_FAILURE,
  AUTH_SIGNOUT_REQUEST,
  AUTH_SIGNOUT_SUCCESS,
  AUTH_SIGNOUT_FAILURE,
  AUTH_DROPOUT_REQUEST,
  AUTH_DROPOUT_SUCCESS,
  AUTH_DROPOUT_FAILURE,
  IAuthSigninAction,
  IAuthSignoutAction,
  IAuthTokenrefreshAction,
} from "./types";
import { msgCreate } from "../Msg";
import { loadingStart, loadingFinish } from "../Loading";
import createRequestSaga from "@Services/Store/lib/createRequestSaga";
import Api from "@Services/Api";

export function* authSigninSaga(data: IAuthSigninAction): Generator {
  yield put(loadingStart(data.type));
  const payload = {
    email: data.payload.email,
    password: data.payload.password,
  };
  try {
    const response: any = yield call(Api.auth.authenticate, payload);

    yield put({ type: AUTH_SIGNIN_SUCCESS, payload: response.data });
    localStorage.setItem("token", response.data.response.token);
    localStorage.setItem("userName", response.data.response.userName);
    localStorage.setItem("email", response.data.response.email);
    yield put(
      msgCreate(AUTH_SIGNIN_SUCCESS, "ALERT", { message: "로그인되었습니다." })
    );
  } catch (error) {
    yield put(msgCreate(AUTH_SIGNIN_FAILURE, "ERROR", error));
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("email");
  }
  yield put(loadingFinish(data.type));
}

export const authTokenrefreshSaga = createRequestSaga(
  AUTH_TOKENREFRESH_REQUEST,
  Api.auth.reauthorize
);

export function* authSignoutSaga(data: IAuthSignoutAction): Generator {
  yield put(loadingStart(data.type));
  const payload = {
    email: data.payload.email,
  };
  try {
    const response: any = yield call(Api.auth.deauthorize, payload);
    if (response.status === 200) {
      yield put({ type: AUTH_SIGNOUT_SUCCESS, payload: response.data });
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("email");
    }
  } catch (error) {
    yield put(msgCreate(AUTH_SIGNOUT_FAILURE, "ERROR", error));
  }
  yield put(loadingFinish(data.type));
}

function* authSignup() {
  yield takeLatest(
    AUTH_SIGNUP_REQUEST,
    createRequestSaga(AUTH_SIGNUP_REQUEST, Api.user.create_user)
  );
}
function* authSignin() {
  yield takeLatest(AUTH_SIGNIN_REQUEST, authSigninSaga);
}
function* authTokenrefresh() {
  yield takeLatest(AUTH_TOKENREFRESH_REQUEST, authTokenrefreshSaga);
}
function* authSignout() {
  yield takeLatest(AUTH_SIGNOUT_REQUEST, authSignoutSaga);
}
function* authDropout() {
  yield takeLatest(
    AUTH_DROPOUT_REQUEST,
    createRequestSaga(AUTH_DROPOUT_REQUEST, Api.user.delete_user)
  );
}
export default function* () {
  yield all([
    fork(authSignup),
    fork(authSignin),
    fork(authTokenrefresh),
    fork(authSignout),
    fork(authDropout),
  ]);
}
