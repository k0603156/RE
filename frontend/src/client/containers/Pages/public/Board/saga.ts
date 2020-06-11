import { all, fork, takeLatest } from "redux-saga/effects";
import { BOARD_BROWSE_REQUEST } from "./types";
import createRequestSaga from "client/lib/createRequestSaga";
import Api from "client/lib/api";

// 포스트 리스트 읽기
const boardBrowseSaga = createRequestSaga(
  BOARD_BROWSE_REQUEST,
  Api.post.post_browse_list,
);

function* boardBrowse() {
  yield takeLatest(BOARD_BROWSE_REQUEST, boardBrowseSaga);
}

export default function* () {
  yield all([fork(boardBrowse)]);
}
