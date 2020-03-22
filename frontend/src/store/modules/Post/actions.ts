import {
  POST_FILLIN_CONDUCT,
  POST_BROWSE_REQUEST,
  POST_CREATE_REQUEST,
  POST_DELETE_REQUEST,
  POST_UPDATE_REQUEST,
  TPostAction,
  IPostState
} from "./types";
import { Node } from "slate";
//** CREATE ACTION **//

//게시글 작성 액션
export function postFillinAction(
  name: string,
  data: Array<Node> | string
): TPostAction {
  return {
    type: POST_FILLIN_CONDUCT,
    payload: { name, data }
  };
}
//게시글 읽기 요청
export function postBrowseAction(pid: number): TPostAction {
  return {
    type: POST_BROWSE_REQUEST,
    payload: { pid }
  };
}
//게시글 생성 요청
export function postCreateAction(payload: IPostState): TPostAction {
  return {
    type: POST_CREATE_REQUEST,
    payload
  };
}

//게시글 삭제 요청
export function postDeleteAction(): TPostAction {
  return {
    type: POST_DELETE_REQUEST
  };
}
//게시글 수정 요청
export function postUpdateAction(): TPostAction {
  return {
    type: POST_UPDATE_REQUEST
  };
}
