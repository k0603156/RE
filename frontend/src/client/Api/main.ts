import Axios from "axios";
// Api url
const API_ROOT =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000/api/v1/"
    : "http://35.213.18.30/api/v1/";

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
        Authorization: token ? `Bearer ${token}` : null
      }
    }
  });
};

export default {
  boardlist_browse() {
    return req("get", "board", "/boardlist");
  },
  postlist_browse(payload: { boardId: string }) {
    console.log("payload::", payload);
    return req(
      "get",
      "post",
      `/list/byboardnviews/${payload.boardId}/?limit=5`
    );
  }
};
