import { PrivateAdmin, PrivateWrite } from "Pages/private";

export default {
  Admin: {
    component: PrivateAdmin,
    path: "/adm"
  },
  Post: {
    component: PrivateWrite,
    path: "/write"
  }
};
