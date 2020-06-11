import { Node } from "slate";

export const POST_BROWSE_REQUEST = "post/POST_BROWSE_REQUEST";
export const POST_BROWSE_SUCCESS = "post/POST_BROWSE_SUCCESS";
export const POST_BROWSE_FAILURE = "post/POST_BROWSE_FAILURE";

export const POST_CREATE_REQUEST = "post/POST_CREATE_REQUEST";
export const POST_CREATE_SUCCESS = "post/POST_CREATE_SUCCESS";
export const POST_CREATE_FAILURE = "post/POST_CREATE_FAILURE";

export const POST_DELETE_REQUEST = "post/POST_DELETE_REQUEST";
export const POST_DELETE_SUCCESS = "post/POST_DELETE_SUCCESS";
export const POST_DELETE_FAILURE = "post/POST_DELETE_FAILURE";

export const POST_UPDATE_REQUEST = "post/POST_UPDATE_REQUEST";
export const POST_UPDATE_SUCCESS = "post/POST_UPDATE_SUCCESS";
export const POST_UPDATE_FAILURE = "post/POST_UPDATE_FAILURE";

// 게시글 읽기 요청
export interface IPostBrowseRequest {
  type: typeof POST_BROWSE_REQUEST;
  payload: {
    pid: string;
  };
}
// 게시글 생성 요청
export interface IPostCreateRequest {
  type: typeof POST_CREATE_REQUEST;
  payload: IPostCreatePayload;
}
// 게시글 삭제 요청
export interface IPostDeleteRequest {
  type: typeof POST_DELETE_REQUEST;
}
// 게시글 수정 요청
export interface IPostUpdateRequest {
  type: typeof POST_UPDATE_REQUEST;
}

export type TPostAction =
  | IPostBrowseRequest
  | IPostCreateRequest
  | IPostDeleteRequest
  | IPostUpdateRequest;

export interface InitialState {
  id: string;
  title: string;
  boardId: string;
  content: Array<Node>;
  hashtags: Array<{ name: string }>;
  updatedAt: string;
  user: { userName: string };
}

export type IPostCreatePayload = Omit<
  InitialState,
  "id" | "updatedAt" | "user"
>;
