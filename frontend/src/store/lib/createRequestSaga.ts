import { call, put } from "redux-saga/effects";
import { loadingStart, loadingFinish } from "@Store/modules/Loading";
import { msgCreate, msgClear } from "@Store/modules/Msg";

export default function createRequestSaga(type: any, request: any) {
  const SUCCESS = String(type).replace("REQUEST", "SUCCESS");
  const FAILURE = String(type).replace("REQUEST", "FAILURE");
  return function*(action: any) {
    yield put(loadingStart(type)); // 로딩 시작
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data
      });
      yield put(msgClear());
      action.callback && action.callback();
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true
      });
      yield put(msgCreate(FAILURE, "ERROR", error));
    } finally {
      yield put(loadingFinish(type)); // 로딩 끝
    }
  };
}
