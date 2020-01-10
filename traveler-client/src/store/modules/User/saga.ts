import {
  GET_USER_REQUEST,
  CREATE_USER_REQUEST,
  UPDATE_USER_REQUEST,
  DELETE_USER_REQUEST
} from "./types";
import { User } from "Api";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "Store/lib/createRequestSaga";

//사용자 정보 요청
const getUserSaga = createRequestSaga(GET_USER_REQUEST, User.get_user);
//사용자 생성 요청
const createUserSaga = createRequestSaga(CREATE_USER_REQUEST, User.create_user);
// 사용자 정보수정 요청
const updateUserSaga = createRequestSaga(UPDATE_USER_REQUEST, User.update_user);
// 사용자 탈퇴 요청
const deleteUserSaga = createRequestSaga(DELETE_USER_REQUEST, User.delete_user);

function* userSaga(): Generator {
  yield takeLatest(GET_USER_REQUEST, getUserSaga);
  yield takeLatest(CREATE_USER_REQUEST, createUserSaga);
  yield takeLatest(UPDATE_USER_REQUEST, updateUserSaga);
  yield takeLatest(DELETE_USER_REQUEST, deleteUserSaga);
}
export default userSaga;
