//게시글 리스트 요청
export const POSTLIST_BROWSE_REQUEST = "postlist/POSTLIST_BROWSE_REQUEST";
export const POSTLIST_BROWSE_SUCCESS = "postlist/POSTLIST_BROWSE_SUCCESS";
export const POSTLIST_BROWSE_FAILURE = "postlist/POSTLIST_BROWSE_FAILURE";

//게시글 리스트 요청
export interface IPostlistBrowseRequest {
  type: typeof POSTLIST_BROWSE_REQUEST;
  payload: { page: number };
}

export type IPostlistAction = IPostlistBrowseRequest;

export interface IPostlistState {
  postlist: Array<any>;
}
