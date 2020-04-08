// 게시글 분류 선택
export const BOARD_SELECT_TRIGGER = "main/BOARD_SELECT_TRIGGER";
// 게시글 분류 리스트 가져오기
export const BOARDLIST_BROWSE_REQUEST = "main/BOARDLIST_BROWSE_REQUEST";
export const BOARDLIST_BROWSE_SUCCESS = "main/BOARDLIST_BROWSE_SUCCESS";
export const BOARDLIST_BROWSE_FAILURE = "main/BOARDLIST_BROWSE_FAILURE";
// 선택된 분류 게시글 가져오기
export const POSTLIST_BROWSE_REQUEST = "main/POSTLIST_BROWSE_REQUEST";
export const POSTLIST_BROWSE_SUCCESS = "main/POSTLIST_BROWSE_SUCCESS";
export const POSTLIST_BROWSE_FAILURE = "main/POSTLIST_BROWSE_FAILURE";

export interface IBoardSelectTrigger {
  type: typeof BOARD_SELECT_TRIGGER;
  payload: {
    boardId: number;
  };
}
export interface IBoardlistBrowseRequest {
  type: typeof BOARDLIST_BROWSE_REQUEST;
}
export interface IPostlistBrowseRequest {
  type: typeof POSTLIST_BROWSE_REQUEST;
  payload: {
    boardId: number;
  };
}
export type IMainAction =
  | IBoardSelectTrigger
  | IBoardlistBrowseRequest
  | IPostlistBrowseRequest;

export interface InitialState {
  selectedBoard: number;
  boardlist: Array<{ id: string; name: string }>;
  postlist: Array<any>;
}
