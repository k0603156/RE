import Axios from "axios";
import { IPostCreatePayload } from "@Store/modules/Post/types";
import { API_ROOT } from "./config";

const ROUTE = "post";

const req = (
  method: "get" | "post" | "put" | "delete",
  url: string,
  data?:
    | {
        pid?: number;
      }
    | IPostCreatePayload
) => {
  const token = localStorage.getItem("token");
  return Axios({
    method,
    url: API_ROOT + ROUTE + url,
    data,
    headers: {
      common: {
        Authorization: token ? `Bearer ${token}` : null,
      },
    },
  });
};

export default {
  //게시글 읽기 요청
  post_browse(payload: { pid: number }) {
    return req("get", `/${payload.pid}`);
  },
  //게시글 리스트 요청
  post_browse_list(payload: { boardId: number; page: number }) {
    return req("get", `/list/?page=${payload.page}&boardId=${payload.boardId}`);
  },
  //게시글 생성 요청
  post_create(payload: IPostCreatePayload) {
    return req("post", "/", {
      title: payload.title,
      boardId: payload.boardId,
      content: payload.content,
      hashtags: payload.hashtags,
    });
  },
  //게시글 삭제 요청
  post_delete(payload: { pid: number }) {
    return req("delete", "/", payload);
  },
  //게시글 수정 요청
  post_update(payload: { pid: number; contents: Array<any> }) {
    return req("put", "/", payload);
  },
};
