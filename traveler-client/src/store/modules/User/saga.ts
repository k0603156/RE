import { CREATE_USER } from "./types";
import { User } from "Api";
import { takeEvery } from "redux-saga/effects";
import createRequestSaga from "../../lib/createRequestSaga";

const createUserSaga = createRequestSaga(CREATE_USER, User.create_user);

function* userSaga(): Generator {
  yield takeEvery(CREATE_USER, createUserSaga);
}
export default userSaga;
