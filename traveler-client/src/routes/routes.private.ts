import { PrivatePlanEdit, PrivateUser } from "Pages/private";

export default {
  User: {
    component: PrivateUser,
    path: "/user/:searchUserName"
  },
  PlanEdit: {
    component: PrivatePlanEdit,
    path: "/planEdit"
  }
};
