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
import { Plan } from "@Client/Api";
import {
  INCREASE_PLAN_STORY_MUTATE,
  DECREASE_PLAN_STORY_MUTATE,
  CREATE_PLAN_REQUEST,
  SELECT_PLAN_REQUEST,
  UPDATE_PLAN_REQUEST,
  DELETE_PLAN_REQUEST,
  INCREASE_PLAN_STORY_SUCCESS,
  INCREASE_PLAN_STORY_FAILURE,
  DECREASE_PLAN_STORY_SUCCESS,
  DECREASE_PLAN_STORY_FAILURE,
  CREATE_PLAN_SUCCESS,
  increase_plan_story_mutate,
  decrease_plan_story_mutate
} from "./types";

const storyMaximum = 5;

//컨텐츠 증가
export function* increaseStorySaga(
  data: increase_plan_story_mutate
): Generator {
  yield put(startLoading(data.type));
  try {
    const [storyCount]: any = yield select(state => [
      state.plan.storyArr.length
    ]);
    if (storyCount && storyCount < storyMaximum) {
      yield put({ type: INCREASE_PLAN_STORY_SUCCESS, payload: {} });
    } else {
      throw new Error("일정을 더 이상 추가할 수 없습니다.");
    }
  } catch (error) {
    console.dir(error);
    yield put(createMSG(INCREASE_PLAN_STORY_FAILURE, "ERROR", error));
  } finally {
    yield put(finishLoading(data.type));
  }
}
//컨텐츠 감소
export function* decreaseStorySaga(
  data: decrease_plan_story_mutate
): Generator {
  yield put(startLoading(data.type));
  try {
    const contentsCount: any = yield select(
      state => state.plan.contentArr.length
    );
    if (contentsCount && contentsCount > 1) {
      yield put({ type: DECREASE_PLAN_STORY_SUCCESS, payload: {} });
    } else {
      throw new Error("최소 1개의 일정을 작성해야 합니다.");
    }
  } catch (error) {
    yield put(createMSG(DECREASE_PLAN_STORY_FAILURE, "ERROR", error));
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
      yield put(createMSG(FAILURE, "ERROR", error));
    } finally {
      yield put(finishLoading(type));
    }
  };
}
const RedirectPageSaga = (url: string) => {
  return function* RedirectPageSaga() {
    const history = yield getContext("history");
    history.push(url);
  };
};
//포스트 생성
const createPlanSaga = requestPlanSaga(CREATE_PLAN_REQUEST, Plan.create_plan);
//포스트 읽기
const selectPlanSaga = requestPlanSaga(SELECT_PLAN_REQUEST, Plan.select_plan);
//포스트 업데이트
const updatePlanSaga = requestPlanSaga(UPDATE_PLAN_REQUEST, Plan.update_plan);
//포스트 삭제
const deletePlanSaga = requestPlanSaga(DELETE_PLAN_REQUEST, Plan.delete_plan);

function* increaseStory() {
  yield takeLatest(INCREASE_PLAN_STORY_MUTATE, increaseStorySaga);
}
function* decreaseStory() {
  yield takeLatest(DECREASE_PLAN_STORY_MUTATE, decreaseStorySaga);
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
function* createPlanSucess() {
  yield takeLatest(CREATE_PLAN_SUCCESS, RedirectPageSaga("/"));
}

function* planSaga() {
  yield all([
    fork(increaseStory),
    fork(decreaseStory),
    fork(createPlan),
    fork(selectPlan),
    fork(updatePlan),
    fork(deletePlan),
    fork(createPlanSucess)
  ]);
}
export default planSaga;
