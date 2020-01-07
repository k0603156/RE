import Axios from "axios";
// Api url
const API_ROOT = "http://localhost:8000/api/v1/post";

const req = (
  // 사용가능 HTTP 메서드
  method: "get" | "post" | "put" | "delete",
  url: string,
  // payload 타입
  data?:
    | {
        postIndex?: number;
        post: {};
        contents: [{}];
      }
    | {
        postIndex: number;
      }
) => {
  const token = sessionStorage.getItem("token");
  return Axios({
    method,
    url: API_ROOT + url,
    data,
    headers: {
      common: {
        Authorization: token ? `Bearer ${token}` : null
      }
    }
  });
};

export default {
  //포스트 생성요청
  createPost(payload: { post: any; contents: any }) {
    return req("post", "/", payload);
  },
  //포스트 읽기요청
  getPost(payload: { postIndex: number }) {
    return req("get", `/${payload.postIndex}`);
  },
  //포스트 업데이트요청
  updatePost(payload: { postIndex: number; post: any; contents: any }) {
    return req("put", "/", payload);
  },
  //포스트 삭제요청
  deletePost(payload: { postIndex: number }) {
    return req("delete", "/", payload);
  }
};
