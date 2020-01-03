import {
  lOGIN_AUTH,
  CHECK_OTP_AUTH,
  CHANGE_TOKEN_AUTH,
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
    type: CHANGE_TOKEN_AUTH
  };
}

export function logout(email: string): AUTH_ACTION_TYPES {
  return {
    type: LOGOUT_AUTH,
    payload: { email }
  };
}

// import { createAction } from "typesafe-actions";
// export const login = createAction(lOGIN_AUTH, loginData => {
//   return (email: string, password: string) => loginData(email, password);
// });
// export const check_otp = createAction(CHECK_OTP_AUTH, otpData => {
//   return (otp: string) => otpData(otp);
// });
// export const change_token = createAction(CHANGE_TOKEN_AUTH);

// export const logout = createAction(LOGOUT_AUTH, logoutData => {
//   return (email: string) => logoutData(email);
// });
