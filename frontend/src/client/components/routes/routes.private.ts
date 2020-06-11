import {
  PrivatePostEdit,
  PrivateProfile,
} from "client/containers/Pages/private";

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
