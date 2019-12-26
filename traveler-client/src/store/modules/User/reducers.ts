import { UserState, UserActionTypes, lOGIN_USER, LOGOUT_USER } from "./types";
const initialState: UserState = {
  isLogged: false,
  user: {
    userName: "",
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
