import {
  SET_CONTENT_HEADER,
  SET_CONTENT,
  ADD_CONTENT,
  REMOVE_CONTENT,
  CREATE_POST,
  GET_POST,
  UPDATE_POST,
  DELETE_POST,
  POST_ACTION_TYPES
} from "./types";

//** CREATE ACTION **//
// 헤더작성
export function set_content_header(
  entry: "title" | "country" | "fromDate" | "toDate" | "subTitle" | "image",
  data: string | number
): POST_ACTION_TYPES {
  return {
    type: SET_CONTENT_HEADER,
    payload: {
      entry,
      data
    }
  };
}
// 콘텐츠작성
export function set_content(
  contentIndex: number,
  entry: "title" | "date" | "body" | "image",
  data: string
): POST_ACTION_TYPES {
  return {
    type: SET_CONTENT,
    payload: {
      contentIndex,
      entry,
      data
    }
  };
}
// 콘텐츠개수증가
export function add_content(): POST_ACTION_TYPES {
  return {
    type: ADD_CONTENT,
    payload: {}
  };
}
//콘텐츠개수감소
export function remove_content(): POST_ACTION_TYPES {
  return {
    type: REMOVE_CONTENT,
    payload: {}
  };
}
//포스트 생성요청
export function create_post(post: any, contents: any): POST_ACTION_TYPES {
  return {
    type: CREATE_POST,
    payload: { post, contents }
  };
}
//포스트 읽기요청
export function get_post(postIndex: number): POST_ACTION_TYPES {
  return {
    type: GET_POST,
    payload: { postIndex }
  };
}
//포스트 업데이트요청
export function update_post(
  postIndex: number,
  post: any,
  contents: any
): POST_ACTION_TYPES {
  return {
    type: UPDATE_POST,
    payload: { postIndex, post, contents }
  };
}
//포스트 삭제요청
export function delete_post(postIndex: number): POST_ACTION_TYPES {
  return {
    type: DELETE_POST,
    payload: { postIndex }
  };
}
