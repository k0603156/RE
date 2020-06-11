import { IPostCreatePayload } from "client/services/Store/modules/Post/types";
import request from "./config";

export interface IpostBrowse {
  pid: number;
}
export interface IpostBrowseList {
  boardId: number;
  page: number;
}
export interface IpostDelete {
  pid: number;
}
export interface IpostUpdate {
  pid: number;
  contents: Array<any>;
}

export default {
  post_browse(payload: IpostBrowse) {
    return request.get(`/post/${payload.pid}`);
  },

  post_browse_list(payload: IpostBrowseList) {
    return request.get(
      `/post/list/?page=${payload.page}&boardId=${payload.boardId}`,
    );
  },
  post_create(payload: IPostCreatePayload) {
    const { title, boardId, content, hashtags } = payload;
    /* prettier-ignore */
    return request.post("/post", { title, boardId, content, hashtags, });
  },
  post_delete(payload: IpostDelete) {
    return request.delete(`/post/${payload}`);
  },

  post_update(payload: IpostUpdate) {
    return request.put("/post", payload);
  },
};
