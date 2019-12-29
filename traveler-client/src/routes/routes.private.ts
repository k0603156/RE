import { PrivateAdmin, PrivatePost } from "pages/private";

export default {
  Admin: {
    component: PrivateAdmin,
    path: "/adm"
  },
  Post: {
    component: PrivatePost,
    path: "/post"
  }
};
