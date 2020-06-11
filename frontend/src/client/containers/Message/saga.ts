import { all, fork, takeLatest, delay, put } from "redux-saga/effects";
import { msgClear } from "./actions";
import { MSG_CREATE } from "./types";

function* increaseStorySaga() {
  yield delay(3000);
  yield put(msgClear());
}

function* increaseStory() {
  yield takeLatest(MSG_CREATE, increaseStorySaga);
}

export default function* msgSaga() {
  yield all([fork(increaseStory)]);
}
