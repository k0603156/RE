import {
  POST_BROWSE_REQUEST,
  POST_CREATE_REQUEST,
  POST_DELETE_REQUEST,
  POST_UPDATE_REQUEST,
  TPostAction,
  IPostCreatePayload,
} from "./types";
//* * CREATE ACTION **//

// 게시글 읽기 요청
export function postBrowseAction(pid: string): TPostAction {
  return {
    type: POST_BROWSE_REQUEST,
    payload: { pid },
  };
}
// 게시글 생성 요청
export function postCreateAction(payload: IPostCreatePayload): TPostAction {
  return {
    type: POST_CREATE_REQUEST,
    payload,
  };
}

// 게시글 삭제 요청
export function postDeleteAction(): TPostAction {
  return {
    type: POST_DELETE_REQUEST,
  };
}
// 게시글 수정 요청
export function postUpdateAction(): TPostAction {
  return {
    type: POST_UPDATE_REQUEST,
  };
}
