import { createReducer } from "typesafe-actions";
import { ADD_CONTENT, REMOVE_CONTENT } from "./types";
import {
  CREATE_POST_SUCCESS,
  GET_POST_SUCCESS,
  UPDATE_POST_SUCCESS,
  DELETE_POST_SUCCESS
} from "./types";

const content = {
  title: "",
  date: "",
  body: "",
  toDate: "",
  image: ""
};

const initialState = {
  header: {
    title: "",
    country: "",
    fromDate: "",
    toDate: "",
    subTitle: "",
    image: ""
  },
  contents: [content]
};

const PostReducer = createReducer(initialState, {
  // 콘텐츠개수증가
  [ADD_CONTENT]: (state, action) => {
    return { ...state };
  },
  //콘텐츠개수감소
  [REMOVE_CONTENT]: (state, action) => {
    return { ...state };
  },
  //포스트 생성요청
  [CREATE_POST_SUCCESS]: (state, action) => {
    return { ...state };
  },
  //포스트 읽기요청
  [GET_POST_SUCCESS]: (state, action) => {
    return { ...state };
  },
  //포스트 업데이트요청
  [UPDATE_POST_SUCCESS]: (state, action) => {
    return { ...state };
  },
  //포스트 삭제요청
  [DELETE_POST_SUCCESS]: (state, action) => {
    return { ...state };
  }
});
export default PostReducer;
