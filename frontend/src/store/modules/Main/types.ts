// 게시글 분류 선택
export const BOARD_SELECT_MUTATE = "main/BOARD_SELECT_MUTATE";
// 게시글 분류 리스트 가져오기
export const BOARDLIST_BROWSE_REQUEST = "main/BOARDLIST_BROWSE_REQUEST";
export const BOARDLIST_BROWSE_SUCCESS = "main/BOARDLIST_BROWSE_SUCCESS";
export const BOARDLIST_BROWSE_FAILURE = "main/BOARDLIST_BROWSE_FAILURE";
// 선택된 분류 게시글 가져오기
export const POSTLIST_BROWSE_REQUEST = "main/POSTLIST_BROWSE_REQUEST";
export const POSTLIST_BROWSE_SUCCESS = "main/POSTLIST_BROWSE_SUCCESS";
export const POSTLIST_BROWSE_FAILURE = "main/POSTLIST_BROWSE_FAILURE";

export interface IBoardSelectMutate {
  type: typeof BOARD_SELECT_MUTATE;
  payload: {
    boardId: string;
  };
}
export interface IBoardlistBrowseRequest {
  type: typeof BOARDLIST_BROWSE_REQUEST;
}
export interface IPostlistBrowseRequest {
  type: typeof POSTLIST_BROWSE_REQUEST;
  payload: {
    boardId: string;
  };
}
export type IMainAction =
  | IBoardSelectMutate
  | IBoardlistBrowseRequest
  | IPostlistBrowseRequest;

export interface IMainState {
  selectedBoard: string;
  boardlist: Array<{ id: string; name: string }>;
  postlist: Array<any>;
}
