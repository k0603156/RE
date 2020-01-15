import Axios from "axios";
// Api url
const API_ROOT =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000/api/v1/"
    : "http://35.213.18.30/api/v1/";
const ROUTE = "plan";

const req = (
  // 사용가능 HTTP 메서드
  method: "get" | "post" | "put" | "delete",
  url: string,
  // payload 타입
  data?:
    | {
        planIndex?: number;
        plan: {};
        contents: [{}];
      }
    | {
        planIndex: number;
      }
) => {
  const token = sessionStorage.getItem("token");
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
  //포스트 생성요청
  create_plan(payload: { plan: any; contents: any }) {
    return req("post", "/", payload);
  },
  //포스트 읽기요청
  select_plan(payload: { planIndex: number }) {
    return req("get", `/${payload.planIndex}`);
  },
  //포스트 업데이트요청
  update_plan(payload: { planIndex: number; plan: any; contents: any }) {
    return req("put", "/", payload);
  },
  //포스트 삭제요청
  delete_plan(payload: { planIndex: number }) {
    return req("delete", "/", payload);
  }
};
