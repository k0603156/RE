import {
  INPUT_PLAN_MUTATE,
  INPUT_STORY_MUTATE,
  INCREASE_STORY_MUTATE,
  DECREASE_STORY_MUTATE,
  CREATE_PLAN_REQUEST,
  SELECT_PLAN_REQUEST,
  UPDATE_PLAN_REQUEST,
  DELETE_PLAN_REQUEST,
  PLAN_ACTION_TYPES
} from "./types";

//** CREATE ACTION **//
// 헤더작성
export function input_plan(
  entry: "title" | "country" | "fromDate" | "toDate" | "subTitle" | "image",
  data: string | number
): PLAN_ACTION_TYPES {
  return {
    type: INPUT_PLAN_MUTATE,
    payload: {
      entry,
      data
    }
  };
}
// 콘텐츠작성
export function input_story(
  contentIndex: number,
  entry: "title" | "date" | "body" | "image",
  data: string
): PLAN_ACTION_TYPES {
  return {
    type: INPUT_STORY_MUTATE,
    payload: {
      contentIndex,
      entry,
      data
    }
  };
}
// 콘텐츠개수증가
export function increase_story(): PLAN_ACTION_TYPES {
  return {
    type: INCREASE_STORY_MUTATE,
    payload: {}
  };
}
//콘텐츠개수감소
export function decrease_story(contentIndex: number): PLAN_ACTION_TYPES {
  return {
    type: DECREASE_STORY_MUTATE,
    payload: {
      contentIndex
    }
  };
}
//포스트 생성요청
export function create_plan(plan: any): PLAN_ACTION_TYPES {
  return {
    type: CREATE_PLAN_REQUEST,
    payload: { plan }
  };
}
//포스트 읽기요청
export function select_plan(planIndex: number): PLAN_ACTION_TYPES {
  return {
    type: SELECT_PLAN_REQUEST,
    payload: { planIndex }
  };
}
//포스트 업데이트요청
export function update_plan(
  planIndex: number,
  plan: any,
  storyArr: any
): PLAN_ACTION_TYPES {
  return {
    type: UPDATE_PLAN_REQUEST,
    payload: { planIndex, plan, storyArr }
  };
}
//포스트 삭제요청
export function delete_plan(planIndex: number): PLAN_ACTION_TYPES {
  return {
    type: DELETE_PLAN_REQUEST,
    payload: { planIndex }
  };
}
