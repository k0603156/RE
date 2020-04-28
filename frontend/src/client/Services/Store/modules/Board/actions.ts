import { BOARD_SET_PAGE, BOARD_BROWSE_REQUEST, IBoardAction } from "./types";

//** CREATE ACTION **//

export function boardSetPage(page: number): IBoardAction {
  return {
    type: BOARD_SET_PAGE,
    payload: { page },
  };
}
//포스트 리스트 읽기요청
export function boardBrowseAction(boardId: number, page: number): IBoardAction {
  return {
    type: BOARD_BROWSE_REQUEST,
    payload: { boardId, page },
  };
}
