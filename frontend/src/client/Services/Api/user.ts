import request from "./config";

export interface IuserSelect {
  userName: string;
}
export interface IuserCreate {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface IuserUpdate {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface IuserDelete {
  userName: string;
}

export default {
  select_user(payload: IuserSelect) {
    return request.get(`/user/${payload.userName}`);
  },

  select_users() {
    return request.get("/user");
  },

  create_user(payload: IuserCreate) {
    return request.post("/user", payload);
  },

  update_user(payload: IuserUpdate) {
    return request.put("/user", payload);
  },

  delete_user(payload: IuserDelete) {
    return request.delete(`/user/${payload.userName}`);
  },
};
