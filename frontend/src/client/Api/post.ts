import Axios from "axios";
import { IPostState } from "@Store/modules/Post/types";
import { Node } from "slate";
// Api url
const API_ROOT =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000/api/v1/"
    : "http://35.213.18.30/api/v1/";
const ROUTE = "post";

const req = (
  method: "get" | "post" | "put" | "delete",
  url: string,
  data?:
    | {
        pid?: number;
      }
    | IPostState
) => {
  const token = localStorage.getItem("token");
  return Axios({
    method,
    url: API_ROOT + ROUTE + url,
    data,
    headers: {
      common: {
        Authorization: token ? `Bearer ${token}` : null
      }
    }
  });
};

export default {
  //게시글 읽기 요청
  post_browse(payload: { pid: number }) {
    return req("get", `/${payload.pid}`);
  },
  //게시글 리스트 요청
  post_browse_list(payload: { page: number }) {
    return req("get", `/list/${payload.page}`);
  },
  //게시글 생성 요청
  post_create(payload: IPostState) {
    return req("post", "", payload);
  },
  //게시글 삭제 요청
  post_delete(payload: { pid: number }) {
    return req("delete", "/", payload);
  },
  //게시글 수정 요청
  post_update(payload: { pid: number; contents: Array<any> }) {
    return req("put", "/", payload);
  }
};
