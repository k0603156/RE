import {
  lOGIN_AUTH,
  CHECK_OTP_AUTH,
  CHANGE_TOKERN_AUTH,
  LOGOUT_AUTH,
  AUTH_ACTION_TYPES
} from "./types";

const InitAuth: IAuthState = {
  isLogged: false,
  user: {
    userName: "s",
    email: "s"
  }
};
export function authReducer(state = InitAuth, action: AUTH_ACTION_TYPES) {
  switch (action.type) {
    case lOGIN_AUTH:
      return {};
    case CHECK_OTP_AUTH:
      return {};
    case CHANGE_TOKERN_AUTH:
      return {};
    case LOGOUT_AUTH:
      return {};
    default:
      return state;
  }
}
