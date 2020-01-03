import Axios from "axios";
const API_ROOT = "http://localhost:8000/api/v1/auth";

const req = (
  method: "post",
  url: string,
  data?: {
    email?: string;
    password?: string;
  }
) => {
  const token = localStorage.getItem("token");
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
  }
};
