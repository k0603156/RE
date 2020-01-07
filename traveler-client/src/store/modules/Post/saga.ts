import {
  CREATE_POST,
  CREATE_POST_SUCCESS,
  GET_POST,
  GET_POST_SUCCESS,
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  create_post_action,
  get_post_action,
  update_post_action,
  delete_post_action
} from "./types";
import { Post } from "Api";
import { requestFailure } from "../Error";
import { startLoading, finishLoading } from "../Loading";
import { takeLatest, put, call } from "redux-saga/effects";

//포스트 생성
export function* createPostSaga(data: create_post_action): Generator {
  yield put(startLoading(data.type));
  const payload = {
    post: data.payload.post,
    contents: data.payload.contents
  };
  try {
    const response: any = yield call(Post.createPost, payload);
    yield put({ type: CREATE_POST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put(requestFailure(error));
  }
  yield put(finishLoading(data.type));
}

//포스트 읽기
export function* getPostSaga(data: get_post_action): Generator {
  yield put(startLoading(data.type));
  const payload = {
    postIndex: data.payload.postIndex
  };
  try {
    const response: any = yield call(Post.getPost, payload);
    yield put({ type: GET_POST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put(requestFailure(error));
  }
  yield put(finishLoading(data.type));
}

//포스트 업데이트
export function* updatePostSaga(data: update_post_action): Generator {
  yield put(startLoading(data.type));
  const payload = {
    postIndex: data.payload.postIndex,
    post: data.payload.post,
    contents: data.payload.contents
  };
  try {
    const response: any = yield call(Post.createPost, payload);
    yield put({ type: UPDATE_POST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put(requestFailure(error));
  }
  yield put(finishLoading(data.type));
}

//포스트 삭제
export function* deletePostSaga(data: delete_post_action): Generator {
  yield put(startLoading(data.type));
  const payload = {
    postIndex: data.payload.postIndex
  };
  try {
    const response: any = yield call(Post.deletePost, payload);
    yield put({ type: DELETE_POST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put(requestFailure(error));
  }
  yield put(finishLoading(data.type));
}

function* postSaga(): Generator {
  yield takeLatest(CREATE_POST, createPostSaga);
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
  yield takeLatest(DELETE_POST, deletePostSaga);
}
export default postSaga;
