import { GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER } from "./types";
import { User } from "Api";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "Store/lib/createRequestSaga";

//사용자 정보 요청
const getUserSaga = createRequestSaga(GET_USER, User.get_user);
//사용자 생성 요청
const createUserSaga = createRequestSaga(CREATE_USER, User.create_user);
// 사용자 정보수정 요청
const updateUserSaga = createRequestSaga(UPDATE_USER, User.update_user);
// 사용자 탈퇴 요청
const deleteUserSaga = createRequestSaga(DELETE_USER, User.delete_user);

function* userSaga(): Generator {
  yield takeLatest(GET_USER, getUserSaga);
  yield takeLatest(CREATE_USER, createUserSaga);
  yield takeLatest(UPDATE_USER, updateUserSaga);
  yield takeLatest(DELETE_USER, deleteUserSaga);
}
export default userSaga;
