import { createReducer } from "typesafe-actions";
import {
  POST_BROWSE_SUCCESS,
  POST_CREATE_SUCCESS,
  POST_DELETE_SUCCESS,
  POST_UPDATE_SUCCESS,
  InitialState,
} from "./types";

const initialState: InitialState = {
  id: "",
  title: "",
  boardId: "",
  content: [
    {
      type: "paragraph",
      children: [{ text: "test" }],
    },
  ],
  hashtags: [],
  updatedAt: "",
  user: { userName: "" },
};

export default createReducer(initialState, {
  // 게시글 읽기 성공
  [POST_BROWSE_SUCCESS]: (state, action) => {
    return { ...initialState, ...action.payload.response };
  },
  // 게시글 생성 성공
  [POST_CREATE_SUCCESS]: () => {
    return { ...initialState };
  },
  // 게시글 삭제 성공
  [POST_DELETE_SUCCESS]: (state) => {
    return { ...state };
  },
  // 게시글 수정 성공
  [POST_UPDATE_SUCCESS]: (state) => {
    return { ...state };
  },
});
