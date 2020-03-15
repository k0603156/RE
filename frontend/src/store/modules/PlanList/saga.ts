import {
  all,
  fork,
  takeLatest,
  put,
  call,
  select,
  getContext
} from "redux-saga/effects";
import { startLoading, finishLoading } from "../Loading";
import { createMSG } from "../Msg";
import Api from "@Client/Api"; //TODO PLANLIST API작성
import { SELECT_PLAN_LIST_REQUEST } from "./types";

function requestPlanListSaga(type: any, request: AxiosPromiseType) {
  const SUCCESS = String(type).replace("REQUEST", "SUCCESS");
  const FAILURE = String(type).replace("REQUEST", "FAILURE");
  return function*(action: any) {
    yield put(startLoading(type));
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data
      });
    } catch (error) {
      yield put(createMSG(FAILURE, "ERROR", error));
    } finally {
      yield put(finishLoading(type));
    }
  };
}
//포스트 리스트 읽기
const selectPlanListSaga = requestPlanListSaga(
  SELECT_PLAN_LIST_REQUEST,
  Api.post.post_browse
);

function* selectPlanList() {
  yield takeLatest(SELECT_PLAN_LIST_REQUEST, selectPlanListSaga);
}

function* planListSaga() {
  yield all([fork(selectPlanList)]);
}
export default planListSaga;
