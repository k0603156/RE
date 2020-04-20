import Axios from "axios";
import { API_ROOT } from "./config";

const ROUTE = "auth";
const req = (
  // 사용가능 HTTP 메서드
  method: "post",
  url: string,
  // payload 타입
  data?: {
    email?: string;
    password?: string;
  }
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
  authenticate(payload: { email: string; password: string }) {
    return req("post", "/authenticate", payload);
  },

  authorize() {
    return req("post", "/authorize", {});
  },

  reauthorize() {
    return req("post", "/reauthorize", {});
  },

  //로그아웃
  deauthorize(payload: { email: string }) {
    return req("post", "/deauthorize", payload);
  },
};
