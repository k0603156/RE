import { all, fork, takeLatest } from "redux-saga/effects";
import { POSTLIST_BROWSE_REQUEST } from "./types";
import createRequestSaga from "../../lib/createRequestSaga";
import Api from "@Client/Api";

//포스트 리스트 읽기
const postlistBrowseSaga = createRequestSaga(
  POSTLIST_BROWSE_REQUEST,
  Api.post.post_browse
);

function* postlistBrowse() {
  yield takeLatest(POSTLIST_BROWSE_REQUEST, postlistBrowseSaga);
}

export default function*() {
  yield all([fork(postlistBrowse)]);
}
