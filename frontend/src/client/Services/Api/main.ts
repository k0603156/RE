import request from "./config";
export interface Ipostlist {
  boardId: string;
}

export default {
  boardlist_browse() {
    return request.get("board/boardlist");
  },
  postlist_browse(payload: Ipostlist) {
    return request.get(`board/${payload.boardId}/posts/?limit=5`);
  },
};
