import { BOARD_BROWSE_REQUEST, IBoardAction } from "./types";

//** CREATE ACTION **//

//포스트 리스트 읽기요청
export function boardBrowseAction(page: number): IBoardAction {
  return {
    type: BOARD_BROWSE_REQUEST,
    payload: { page },
  };
}
