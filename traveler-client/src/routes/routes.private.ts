import { PrivateAdmin, PrivateWrite, PrivateUser } from "Pages/private";

export default {
  Admin: {
    component: PrivateAdmin,
    path: "/adm"
  },
  Post: {
    component: PrivateWrite,
    path: "/write"
  },
  User: {
    component: PrivateUser,
    path: "/user/:userName"
  }
};
