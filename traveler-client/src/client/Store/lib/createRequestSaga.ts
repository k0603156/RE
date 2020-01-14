import { call, put } from "redux-saga/effects";
import { startLoading, finishLoading } from "../modules/Loading";
import { createMSG, clearMSG } from "@Client/Store/modules/Msg";

export default function createRequestSaga(type: any, request: any) {
  const SUCCESS = String(type).replace("REQUEST", "SUCCESS");
  const FAILURE = String(type).replace("REQUEST", "FAILURE");
  return function*(action: any) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data
      });
      yield put(clearMSG());
      action.callback && action.callback();
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true
      });
      yield put(createMSG(FAILURE, "ERROR", error));
    } finally {
      yield put(finishLoading(type)); // 로딩 끝
    }
  };
}
