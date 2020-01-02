import Axios from "axios";
const API_ROOT = "/api/v1/auth";

const req = (
  method: "post",
  url: string,
  data?: {
    email?: string;
    password?: string;
  }
) => {
  return Axios({
    method,
    url: API_ROOT + url,
    data
  });
};

export default {
  authenticate() {
    return req("post", "/authenticate", {});
  },

  authorize() {
    return req("post", "/authorize", {});
  },

  reauthorize() {
    return req("post", "/reauthorize", {});
  },

  //로그아웃
  deauthorize() {
    return req("post", "/deauthorize", {});
  }
};
