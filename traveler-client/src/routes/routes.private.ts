import { PrivateAdmin, PrivateWrite } from "pages/private";

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
