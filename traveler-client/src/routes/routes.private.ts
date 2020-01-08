import { PrivatePlanEdit, PrivateUser } from "Pages/private";

export default {
  User: {
    component: PrivateUser,
    path: "/user/:userName"
  },
  PlanEdit: {
    component: PrivatePlanEdit,
    path: "/planEdit"
  }
};
