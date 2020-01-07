import { createReducer } from "typesafe-actions";
import {
  SET_CONTENT,
  ADD_CONTENT,
  REMOVE_CONTENT,
  SET_CONTENT_HEADER
} from "./types";
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
  contentArr: [{ ...content }]
};

const PostReducer = createReducer(initialState, {
  // 콘텐츠작성
  [SET_CONTENT_HEADER]: (state, action: any) => {
    return {
      ...state,
      header: {
        ...state.header,
        [action.payload.entry]: action.payload.data
      }
    };
  },
  // 콘텐츠작성
  [SET_CONTENT]: (state, action) => {
    console.log(action);
    const newcontentArr = state.contentArr.map((content: any, index: any) => {
      if (index === action.payload.contentIndex) {
        content[action.payload.entry] = action.payload.data;
      }
      return content;
    });
    return {
      ...state,
      contentArr: [...newcontentArr]
    };
  },
  // 콘텐츠개수증가
  [ADD_CONTENT]: (state, action) => {
    if (state.contentArr.length < 5) {
      return {
        ...state,
        contentArr: [...state.contentArr, { ...content }]
      };
    } else {
      return {
        ...state
      };
    }
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
