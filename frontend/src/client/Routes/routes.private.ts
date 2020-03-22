import { PrivatePostEdit, PrivateUser } from "@Client/Pages/private";

export default {
  User: {
    component: PrivateUser,
    path: "/user/:searchUserName"
  },
  PostEdit: {
    component: PrivatePostEdit,
    path: "/postedit"
  }
};
