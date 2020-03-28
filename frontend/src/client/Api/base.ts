import Axios from "axios";
// Api url
const API_ROOT =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000/api/v1/"
    : "http://35.213.18.30/api/v1/";
const ROUTE = "base";
const req = (
  method: "get",
  url: string,
  // payload 타입
  data?: {}
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
  boardlist_browse() {
    return req("get", "/boardlist");
  }
};
