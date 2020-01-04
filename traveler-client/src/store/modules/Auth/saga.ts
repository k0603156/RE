import {
  lOGIN_AUTH,
  CHECK_OTP_AUTH,
  CHANGE_TOKEN_AUTH,
  LOGOUT_AUTH
} from "./types";
import { Auth } from "Api";
import { takeEvery } from "redux-saga/effects";
import createRequestSaga from "../../lib/createRequestSaga";

const loginSaga = createRequestSaga(lOGIN_AUTH, Auth.authenticate);
const checkOTPSaga = createRequestSaga(CHECK_OTP_AUTH, Auth.authorize);
const changeTokenSaga = createRequestSaga(CHANGE_TOKEN_AUTH, Auth.reauthorize);
const logoutSaga = createRequestSaga(LOGOUT_AUTH, Auth.deauthorize);

function* authSaga(): Generator {
  yield takeEvery(lOGIN_AUTH, loginSaga);
  yield takeEvery(CHECK_OTP_AUTH, checkOTPSaga);
  yield takeEvery(CHANGE_TOKEN_AUTH, changeTokenSaga);
  yield takeEvery(LOGOUT_AUTH, logoutSaga);
}
export default authSaga;
