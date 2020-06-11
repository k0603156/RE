import axios from "axios";

const baseURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000/api/v1/"
    : "http://35.213.136.130/api/v1/";

const token = localStorage.getItem("token");

const request = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    common: {
      Authorization: token ? `Bearer ${token}` : null,
    },
    post: {
      "Content-Type": "application/json",
    },
  },
});

export default request;
