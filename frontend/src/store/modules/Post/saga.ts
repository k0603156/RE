import {
  all,
  fork,
  takeLatest,
  put,
  call,
  select,
  getContext
} from "redux-saga/effects";
import {
  POST_BROWSE_REQUEST,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_DELETE_REQUEST,
  POST_UPDATE_REQUEST
} from "./types";
import { startLoading, finishLoading } from "../Loading";
import { createMSG } from "../Msg";
import Api from "@Client/Api";

function createSaga(type: string, request: AxiosPromiseType) {
  const SUCCESS = type.replace("REQUEST", "SUCCESS");
  const FAILURE = type.replace("REQUEST", "FAILURE");

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

const postRedirectSaga = (url: string) => {
  return function* RedirectPageSaga() {
    const history = yield getContext("history");
    history.push(url);
  };
};

const postBrowseSaga = createSaga(POST_BROWSE_REQUEST, Api.post.post_browse);
const postCreateSaga = createSaga(POST_CREATE_REQUEST, Api.post.post_create);
const postDeleteSaga = createSaga(POST_DELETE_REQUEST, Api.post.post_delete);
const postUpdateSaga = createSaga(POST_UPDATE_REQUEST, Api.post.post_update);

function* postBrowse() {
  yield takeLatest(POST_BROWSE_REQUEST, postBrowseSaga);
}

function* postCreate() {
  yield takeLatest(POST_CREATE_REQUEST, postCreateSaga);
}

function* postCreateSuccess() {
  yield takeLatest(POST_CREATE_SUCCESS, postRedirectSaga("/"));
}

function* postDelete() {
  yield takeLatest(POST_DELETE_REQUEST, postDeleteSaga);
}
function* postUpdate() {
  yield takeLatest(POST_UPDATE_REQUEST, postUpdateSaga);
}

export default function*() {
  yield all([
    fork(postBrowse),
    fork(postCreate),
    fork(postCreateSuccess),
    fork(postDelete),
    fork(postUpdate)
  ]);
}
