import { createReducer } from "typesafe-actions";
import {
  POST_FILLIN_CONDUCT,
  POST_BROWSE_SUCCESS,
  POST_CREATE_SUCCESS,
  POST_DELETE_SUCCESS,
  POST_UPDATE_SUCCESS,
  IPostState
} from "./types";

const initialState: IPostState = {
  id: "",
  title: "",
  content: [
    {
      type: "paragraph",
      children: [{ text: "test" }]
    }
  ],
  hashtags: [],
  updatedAt: "",
  user: { userName: "" }
};

export default createReducer(initialState, {
  // 게시글 작성 액션
  [POST_FILLIN_CONDUCT]: (state, action) => {
    return { ...state, [action.payload.name]: action.payload.data };
  },
  //게시글 읽기 성공
  [POST_BROWSE_SUCCESS]: (state, action) => {
    console.log(action.payload.response);
    return { ...state, ...action.payload.response };
  },
  //게시글 생성 성공
  [POST_CREATE_SUCCESS]: (state, action) => {
    return { ...state };
  },
  //게시글 삭제 성공
  [POST_DELETE_SUCCESS]: (state, action) => {
    return { ...state };
  },
  //게시글 수정 성공
  [POST_UPDATE_SUCCESS]: (state, action) => {
    return { ...state };
  }
});
