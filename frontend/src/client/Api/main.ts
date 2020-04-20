import Axios from "axios";
import { API_ROOT } from "./config";

const req = (
  method: "get",
  route: string,
  url: string,
  // payload 타입
  data?: {}
) => {
  const token = localStorage.getItem("token");

  return Axios({
    method,
    url: API_ROOT + route + url,
    data,
    headers: {
      common: {
        Authorization: token ? `Bearer ${token}` : null,
      },
    },
  });
};

export default {
  boardlist_browse() {
    return req("get", "board", "/boardlist");
  },
  postlist_browse(payload: { boardId: string }) {
    console.log("payload::", payload);
    return req("get", "board", `/${payload.boardId}/posts/?limit=5`);
  },
};
