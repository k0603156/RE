import {
  PROFILE_SELECT_REQUEST,
  PROFILE_UPDATE_REQUEST,
  PROFILE_DELETE_REQUEST,
} from "./types";
import { all, fork, takeLatest } from "redux-saga/effects";
import createRequestSaga from "@Store/lib/createRequestSaga";
import Api from "@Client/Api";

//사용자 정보 요청
const profileSelectSaga = createRequestSaga(
  PROFILE_SELECT_REQUEST,
  Api.user.select_user
);

// 사용자 정보수정 요청
const profileUpdateSaga = createRequestSaga(
  PROFILE_UPDATE_REQUEST,
  Api.user.update_user
);
// 사용자 탈퇴 요청
const profileDeleteSaga = createRequestSaga(
  PROFILE_DELETE_REQUEST,
  Api.user.delete_user
);

function* profileSelect(): Generator {
  yield takeLatest(PROFILE_SELECT_REQUEST, profileSelectSaga);
}

function* profileUpdate(): Generator {
  yield takeLatest(PROFILE_UPDATE_REQUEST, profileUpdateSaga);
}
function* profileDelete(): Generator {
  yield takeLatest(PROFILE_DELETE_REQUEST, profileDeleteSaga);
}
export default function* (): Generator {
  yield all([fork(profileSelect), fork(profileUpdate), fork(profileDelete)]);
}
