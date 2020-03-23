import {
  USER_SELECT_REQUEST,
  USER_CREATE_REQUEST,
  USER_UPDATE_REQUEST,
  USER_DELETE_REQUEST
} from "./types";
import { all, fork, takeLatest } from "redux-saga/effects";
import createRequestSaga from "@Store/lib/createRequestSaga";
import Api from "@Client/Api";

//사용자 정보 요청
const userSelectSaga = createRequestSaga(
  USER_SELECT_REQUEST,
  Api.user.select_user
);
//사용자 생성 요청
const userCreateSaga = createRequestSaga(
  USER_CREATE_REQUEST,
  Api.user.create_user
);
// 사용자 정보수정 요청
const userUpdateSaga = createRequestSaga(
  USER_UPDATE_REQUEST,
  Api.user.update_user
);
// 사용자 탈퇴 요청
const userDeleteSaga = createRequestSaga(
  USER_DELETE_REQUEST,
  Api.user.delete_user
);

function* userSelect(): Generator {
  yield takeLatest(USER_SELECT_REQUEST, userSelectSaga);
}
function* userCreate(): Generator {
  yield takeLatest(USER_CREATE_REQUEST, userCreateSaga);
}
function* userUpdate(): Generator {
  yield takeLatest(USER_UPDATE_REQUEST, userUpdateSaga);
}
function* userDelete(): Generator {
  yield takeLatest(USER_DELETE_REQUEST, userDeleteSaga);
}
function* userSaga(): Generator {
  yield all([
    fork(userSelect),
    fork(userCreate),
    fork(userUpdate),
    fork(userDelete)
  ]);
}
export default userSaga;
