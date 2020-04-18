//게시글 리스트 요청
export const BOARD_BROWSE_REQUEST = "board/BOARD_BROWSE_REQUEST";
export const BOARD_BROWSE_SUCCESS = "board/BOARD_BROWSE_SUCCESS";
export const BOARD_BROWSE_FAILURE = "board/BOARD_BROWSE_FAILURE";

//게시글 리스트 요청
export interface IBoardBrowseRequest {
  type: typeof BOARD_BROWSE_REQUEST;
  payload: { page: number };
}

export type IBoardAction = IBoardBrowseRequest;

export interface InitialState {
  count: number;
  rows: Array<any>;
}
