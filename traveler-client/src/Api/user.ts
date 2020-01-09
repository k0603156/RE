import Axios from "axios";
// Api url
const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "http://35.213.18.30/api/v1/"
    : "http://localhost:8000/api/v1/";
const ROUTE = "user";

const req = (
  // 사용가능 HTTP 메서드
  method: "get" | "post" | "put" | "delete",
  url: string,
  // payload 타입
  data?: {
    userName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
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
  get_user(payload: { userName: string }) {
    return req("get", `/${payload.userName}`);
  },

  get_users() {
    return req("get", "/");
  },

  create_user(payload: {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    return req("post", "/", payload);
  },

  update_user(
    userName: string,
    email: string,
    password: string,
    confirmPassword: string
  ) {
    return req("put", "/", {
      userName,
      email,
      password,
      confirmPassword
    });
  },

  delete_user(userName: string) {
    return req("delete", "/", { userName });
  }
};
