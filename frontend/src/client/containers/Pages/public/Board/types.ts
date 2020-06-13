export const BOARD_SET_PAGE = "board/BOARD_SET_PAGE";
// 게시글 리스트 요청
export const BOARD_BROWSE_REQUEST = "board/BOARD_BROWSE_REQUEST";
export const BOARD_BROWSE_SUCCESS = "board/BOARD_BROWSE_SUCCESS";
export const BOARD_BROWSE_FAILURE = "board/BOARD_BROWSE_FAILURE";

// 게시글 리스트 요청
export interface IBoardsetPage {
  type: typeof BOARD_SET_PAGE;
  payload: { page: number };
}

// 게시글 리스트 요청
export interface IBoardBrowseRequest {
  type: typeof BOARD_BROWSE_REQUEST;
  payload: { boardId: number; page: number };
}

export type IBoardAction = IBoardsetPage | IBoardBrowseRequest;

export interface InitialState {
  perPage: number;
  page: number;
  count: number;
  rows: Array<any>;
}
