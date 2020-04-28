import { BOARDLIST_BROWSE_REQUEST, POSTLIST_BROWSE_REQUEST } from "./types";
import { all, fork, takeLatest } from "redux-saga/effects";
import createRequestSaga from "@Services/Store/lib/createRequestSaga";
import Api from "@Services/Api";

// 게시글 분류 리스트 요청
const boardlistBrowseSaga = createRequestSaga(
  BOARDLIST_BROWSE_REQUEST,
  Api.main.boardlist_browse
);
const postlistBrowseSaga = createRequestSaga(
  POSTLIST_BROWSE_REQUEST,
  Api.main.postlist_browse
);
function* boardlistBrowse(): Generator {
  yield takeLatest(BOARDLIST_BROWSE_REQUEST, boardlistBrowseSaga);
}
function* postlistBrowse(): Generator {
  yield takeLatest(POSTLIST_BROWSE_REQUEST, postlistBrowseSaga);
}
export default function* (): Generator {
  yield all([fork(boardlistBrowse), fork(postlistBrowse)]);
}
