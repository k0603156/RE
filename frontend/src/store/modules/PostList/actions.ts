import { POSTLIST_BROWSE_REQUEST, IPostlistAction } from "./types";

//** CREATE ACTION **//

//포스트 리스트 읽기요청
export function postlistBrowseAction(): IPostlistAction {
  return {
    type: POSTLIST_BROWSE_REQUEST,
    payload: {}
  };
}
