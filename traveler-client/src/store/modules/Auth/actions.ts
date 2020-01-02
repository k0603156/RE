import {
  lOGIN_AUTH,
  CHECK_OTP_AUTH,
  CHANGE_TOKERN_AUTH,
  LOGOUT_AUTH,
  AUTH_ACTION_TYPES
} from "./types";

//Action Creator
export function login(email: string, password: string): AUTH_ACTION_TYPES {
  return {
    type: lOGIN_AUTH,
    payload: {
      email,
      password
    }
  };
}

export function check_otp(otp: string): AUTH_ACTION_TYPES {
  return {
    type: CHECK_OTP_AUTH,
    payload: { otp }
  };
}

export function change_token(): AUTH_ACTION_TYPES {
  return {
    type: CHANGE_TOKERN_AUTH
  };
}

export function logout(email: string): AUTH_ACTION_TYPES {
  return {
    type: LOGOUT_AUTH,
    payload: { email }
  };
}
