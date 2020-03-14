import {
  SELECT_USER_REQUEST,
  CREATE_USER_REQUEST,
  UPDATE_USER_REQUEST,
  DELETE_USER_REQUEST
} from "./types";
import { all, fork, takeLatest } from "redux-saga/effects";
import createRequestSaga from "@Store/lib/createRequestSaga";
import { User } from "@Client/Api";

//사용자 정보 요청
const selectUserSaga = createRequestSaga(SELECT_USER_REQUEST, User.select_user);
//사용자 생성 요청
const createUserSaga = createRequestSaga(CREATE_USER_REQUEST, User.create_user);
// 사용자 정보수정 요청
const updateUserSaga = createRequestSaga(UPDATE_USER_REQUEST, User.update_user);
// 사용자 탈퇴 요청
const deleteUserSaga = createRequestSaga(DELETE_USER_REQUEST, User.delete_user);

function* selectUser(): Generator {
  yield takeLatest(SELECT_USER_REQUEST, selectUserSaga);
}
function* createUser(): Generator {
  yield takeLatest(CREATE_USER_REQUEST, createUserSaga);
}
function* updateUser(): Generator {
  yield takeLatest(UPDATE_USER_REQUEST, updateUserSaga);
}
function* deleteUser(): Generator {
  yield takeLatest(DELETE_USER_REQUEST, deleteUserSaga);
}
function* userSaga(): Generator {
  yield all([
    fork(selectUser),
    fork(createUser),
    fork(updateUser),
    fork(deleteUser)
  ]);
}
export default userSaga;
