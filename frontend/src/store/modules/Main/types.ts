// 게시글 분류 리스트 가져오기
export const BOARDLIST_BROWSE_REQUEST = "main/BOARDLIST_BROWSE_REQUEST";
export const BOARDLIST_BROWSE_SUCCESS = "main/BOARDLIST_BROWSE_SUCCESS";
export const BOARDLIST_BROWSE_FAILURE = "main/BOARDLIST_BROWSE_FAILURE";

// 게시글 분류 리스트 요청
export interface IBoardlistBrowseRequest {
  type: typeof BOARDLIST_BROWSE_REQUEST;
}

export type IMainAction = IBoardlistBrowseRequest;

export interface IMainState {
  selectedBoard: string;
  boardlist: Array<{ id: string; name: string }>;
  postlist: Array<any>;
}
