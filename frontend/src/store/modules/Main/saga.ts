import { BOARDLIST_BROWSE_REQUEST } from "./types";
import { all, fork, takeLatest } from "redux-saga/effects";
import createRequestSaga from "@Store/lib/createRequestSaga";
import Api from "@Client/Api";

// 게시글 분류 리스트 요청
const boardlistBrowseSaga = createRequestSaga(
  BOARDLIST_BROWSE_REQUEST,
  Api.base.boardlist_browse
);

function* boardlistBrowse(): Generator {
  yield takeLatest(BOARDLIST_BROWSE_REQUEST, boardlistBrowseSaga);
}
export default function*(): Generator {
  yield all([fork(boardlistBrowse)]);
}
