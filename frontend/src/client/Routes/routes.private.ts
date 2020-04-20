import { PrivatePostEdit, PrivateProfile } from "@Client/Pages/private";

export default {
  Profile: {
    component: PrivateProfile,
    path: "/profile/:searchUserName",
  },
  PostEdit: {
    component: PrivatePostEdit,
    path: "/postedit",
  },
};
