// Api url
export const API_ROOT =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000/api/v1/"
    : "http://localhost/api/v1/";
