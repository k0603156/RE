import { all, fork, takeLatest, put, call, select } from "redux-saga/effects";
import { startLoading, finishLoading } from "../Loading";
import { createError } from "../Error";
import { Plan } from "Api";
import {
  INCREASE_CONTENT_MUTATE,
  DECREASE_CONTENT_MUTATE,
  CREATE_PLAN_REQUEST,
  SELECT_PLAN_REQUEST,
  UPDATE_PLAN_REQUEST,
  DELETE_PLAN_REQUEST,
  INCREASE_CONTENT_SUCCESS,
  INCREASE_CONTENT_FAILURE,
  DECREASE_CONTENT_SUCCESS,
  DECREASE_CONTENT_FAILURE,
  increase_content_mutate,
  decrease_content_mutate
} from "./types";

//컨텐츠 증가
export function* increaseContentSaga(data: increase_content_mutate): Generator {
  yield put(startLoading(data.type));
  try {
    const [contentsCount, contentMaximum]: any = yield select(state => [
      state.plan.contentArr.length,
      state.plan.contentMaximum
    ]);
    if (contentsCount && contentsCount < contentMaximum) {
      yield put({ type: INCREASE_CONTENT_SUCCESS, payload: {} });
    } else {
      throw new Error("일정을 더 이상 추가할 수 없습니다.");
    }
  } catch (error) {
    console.dir(error);
    yield put(createError(INCREASE_CONTENT_FAILURE, error));
  } finally {
    yield put(finishLoading(data.type));
  }
}
//컨텐츠 감소
export function* decreaseContentSaga(data: decrease_content_mutate): Generator {
  yield put(startLoading(data.type));
  try {
    const contentsCount: any = yield select(
      state => state.plan.contentArr.length
    );
    if (contentsCount && contentsCount > 1) {
      yield put({ type: DECREASE_CONTENT_SUCCESS, payload: {} });
    } else {
      throw new Error("최소 1개의 일정을 작성해야 합니다.");
    }
  } catch (error) {
    yield put(createError(DECREASE_CONTENT_FAILURE, error));
  } finally {
    yield put(finishLoading(data.type));
  }
}
function requestPlanSaga(type: any, request: AxiosPromiseType) {
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
      yield put(createError(FAILURE, error));
    } finally {
      yield put(finishLoading(type));
    }
  };
}

//포스트 생성
const createPlanSaga = requestPlanSaga(CREATE_PLAN_REQUEST, Plan.create_plan);
//포스트 읽기
const selectPlanSaga = requestPlanSaga(SELECT_PLAN_REQUEST, Plan.select_plan);
//포스트 업데이트
const updatePlanSaga = requestPlanSaga(UPDATE_PLAN_REQUEST, Plan.update_plan);
//포스트 삭제
const deletePlanSaga = requestPlanSaga(DELETE_PLAN_REQUEST, Plan.delete_plan);

function* increaseContent() {
  yield takeLatest(INCREASE_CONTENT_MUTATE, increaseContentSaga);
}
function* decreaseContent() {
  yield takeLatest(DECREASE_CONTENT_MUTATE, decreaseContentSaga);
}
function* createPlan() {
  yield takeLatest(CREATE_PLAN_REQUEST, createPlanSaga);
}
function* selectPlan() {
  yield takeLatest(SELECT_PLAN_REQUEST, selectPlanSaga);
}
function* updatePlan() {
  yield takeLatest(UPDATE_PLAN_REQUEST, updatePlanSaga);
}
function* deletePlan() {
  yield takeLatest(DELETE_PLAN_REQUEST, deletePlanSaga);
}
function* planSaga() {
  yield all([
    fork(increaseContent),
    fork(decreaseContent),
    fork(createPlan),
    fork(selectPlan),
    fork(updatePlan),
    fork(deletePlan)
  ]);
}
export default planSaga;
