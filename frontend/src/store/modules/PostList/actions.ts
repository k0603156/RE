import { POSTLIST_BROWSE_REQUEST, IPostlistBrowseAction } from "./types";

//** CREATE ACTION **//

//포스트 리스트 읽기요청
export function select_plan_list(): IPostlistBrowseAction {
  return {
    type: POSTLIST_BROWSE_REQUEST,
    payload: {}
  };
}
