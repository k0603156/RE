import { createReducer } from "typesafe-actions";
import {
  INPUT_PLAN_HEADER_MUTATE,
  INPUT_PLAN_STORY_MUTATE,
  INCREASE_PLAN_STORY_MUTATE,
  DECREASE_PLAN_STORY_MUTATE
} from "./types";
import {
  CREATE_PLAN_SUCCESS,
  SELECT_PLAN_SUCCESS,
  UPDATE_PLAN_SUCCESS,
  DELETE_PLAN_SUCCESS
} from "./types";

const story = {
  title: "",
  date: "",
  content: "",
  image: ""
};

const initialState = {
  header: {
    title: "",
    country: 0,
    fromDate: "",
    toDate: "",
    mainBody: "",
    image: ""
  },
  storyArr: [{ ...story }]
};

const PlanReducer = createReducer(initialState, {
  // 플랜헤더작성
  [INPUT_PLAN_HEADER_MUTATE]: (state, action: any) => {
    return {
      ...state,
      header: {
        ...state.header,
        [action.payload.entry]: action.payload.data
      }
    };
  },
  // 플랜콘텐츠작성
  [INPUT_PLAN_STORY_MUTATE]: (state, action) => {
    const idx = action.payload.contentIndex;
    const entry = action.payload.entry;
    const data = action.payload.data;
    const newstoryArr = state.storyArr.map((story: any, index: any) => {
      if (index === idx) {
        story[entry] = data;
      }
      return story;
    });
    return {
      ...state,
      storyArr: [...newstoryArr]
    };
  },
  // 콘텐츠개수증가
  [INCREASE_PLAN_STORY_MUTATE]: (state, action) => {
    return {
      ...state,
      storyArr: [...state.storyArr, { ...story }]
    };
  },
  //콘텐츠개수감소
  // contentIndex start from 0
  [DECREASE_PLAN_STORY_MUTATE]: (state, action) => {
    const contentIndex = action.payload.contentIndex;
    return {
      ...state,
      storyArr: [
        ...state.storyArr.slice(0, contentIndex),
        ...state.storyArr.slice(contentIndex + 1, state.storyArr.length)
      ]
    };
  },
  //포스트 생성요청
  [CREATE_PLAN_SUCCESS]: (state, action) => {
    return { header: { ...initialState.header }, storyArr: [{ ...story }] };
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
