import request from "./config";

export interface Iauthenticate {
  email: string;
  password: string;
}
export interface Ideauthorize {
  email: string;
}
export default {
  authenticate(payload: Iauthenticate) {
    return request.post("/auth/authenticate", payload);
  },
  authorize() {
    return request.post("/auth/authorize", {});
  },
  reauthorize() {
    return request.post("/auth/reauthorize", {});
  },
  deauthorize(payload: Ideauthorize) {
    return request.post("/auth/deauthorize", payload);
  },
};
