import { all, fork, takeLatest } from "redux-saga/effects";
import createRequestSaga from "client/lib/createRequestSaga";
import Api from "client/lib/api";
import { PROFILE_SELECT_REQUEST, PROFILE_UPDATE_REQUEST } from "./types";

// 사용자 정보 요청
const profileSelectSaga = createRequestSaga(
  PROFILE_SELECT_REQUEST,
  Api.user.select_user,
);

// 사용자 정보수정 요청
const profileUpdateSaga = createRequestSaga(
  PROFILE_UPDATE_REQUEST,
  Api.user.update_user,
);

function* profileSelect(): Generator {
  yield takeLatest(PROFILE_SELECT_REQUEST, profileSelectSaga);
}

function* profileUpdate(): Generator {
  yield takeLatest(PROFILE_UPDATE_REQUEST, profileUpdateSaga);
}

export default function* (): Generator {
  yield all([fork(profileSelect), fork(profileUpdate)]);
}
