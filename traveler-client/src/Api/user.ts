import Axios from "axios";
const API_ROOT = "http://localhost:8000/api/v1/user";

const req = (
  method: "get" | "post" | "put" | "delete",
  url: string,
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
  get_user(userName: string) {
    return req("get", `/${userName}`);
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
