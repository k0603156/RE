import { GET_USER, GET_USER_SUCCESS, get_user_action } from "./types";
import { User } from "Api";
import { requestFailure } from "../Error";
import { startLoading, finishLoading } from "../Loading";
import { takeEvery, put, call } from "redux-saga/effects";

export function* getUserSaga(data: get_user_action): Generator {
  const payload = {
    userName: data.payload.userName
  };
  yield put(startLoading(data.type)); // 로딩 시작
  try {
    const response: any = yield call(User.get_user, payload);
    yield put({ type: GET_USER_SUCCESS, payload: response.data });
  } catch (error) {
    yield put(requestFailure(error));
  }
  yield put(finishLoading(data.type)); // 로딩 끝
}

function* userSaga(): Generator {
  yield takeEvery(GET_USER, getUserSaga);
}
export default userSaga;
