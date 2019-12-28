import { lOGIN_USER, LOGOUT_USER, UserActionTypes, UserState } from "./types";

const initialState: UserState = {
  isLogged: true,
  user: {
    userName: "Yongkukssss",
    email: ""
  }
};
export function userReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case lOGIN_USER:
      return {
        isLogged: true,
        user: {
          userName: "",
          email: ""
        }
      };
    case LOGOUT_USER:
      return {
        isLogged: false,
        user: {
          userName: "",
          email: ""
        }
      };
    default:
      return state;
  }
}
