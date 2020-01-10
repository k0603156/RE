import { createReducer } from "typesafe-actions";
import {
  INPUT_CONTENT_BODY_MUTATE,
  INPUT_CONTENT_HEADER_MUTATE,
  DECREASE_CONTENT_MUTATE
} from "./types";
import {
  INCREASE_CONTENT_SUCCESS,
  CREATE_PLAN_SUCCESS,
  SELECT_PLAN_SUCCESS,
  UPDATE_PLAN_SUCCESS,
  DELETE_PLAN_SUCCESS
} from "./types";

const content = {
  title: "",
  date: "",
  body: "",
  image: ""
};
const initialState = {
  contentMaximum: 5,
  header: {
    title: "",
    country: 0,
    fromDate: "",
    toDate: "",
    mainBody: "",
    image: ""
  },
  contentArr: [{ ...content }]
};

const PlanReducer = createReducer(initialState, {
  // 콘텐츠작성
  [INPUT_CONTENT_HEADER_MUTATE]: (state, action: any) => {
    return {
      ...state,
      header: {
        ...state.header,
        [action.payload.entry]: action.payload.data
      }
    };
  },
  // 콘텐츠작성
  [INPUT_CONTENT_BODY_MUTATE]: (state, action) => {
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
  [INCREASE_CONTENT_SUCCESS]: (state, action) => {
    return {
      ...state,
      contentArr: [...state.contentArr, { ...content }]
    };
  },
  //콘텐츠개수감소
  // contentIndex start from 0
  [DECREASE_CONTENT_MUTATE]: (state, action) => {
    const contentIndex = action.payload.contentIndex;
    return {
      ...state,
      contentArr: [
        ...state.contentArr.slice(0, contentIndex),
        ...state.contentArr.slice(contentIndex + 1, state.contentMaximum)
      ]
    };
  },
  //포스트 생성요청
  [CREATE_PLAN_SUCCESS]: (state, action) => {
    return { ...state };
  },
  //포스트 읽기요청
  [SELECT_PLAN_SUCCESS]: (state, action) => {
    return { ...state };
  },
  //포스트 업데이트요청
  [UPDATE_PLAN_SUCCESS]: (state, action) => {
    return { ...state };
  },
  //포스트 삭제요청
  [DELETE_PLAN_SUCCESS]: (state, action) => {
    return { ...state };
  }
});
export default PlanReducer;
