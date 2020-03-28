import { BOARDLIST_BROWSE_REQUEST, IMainAction } from "./types";

//** CREATE ACTION **//
// 게시글 분류 리스트 요청
export function boardlistBrowseAction(): IMainAction {
  return {
    type: BOARDLIST_BROWSE_REQUEST
  };
}
