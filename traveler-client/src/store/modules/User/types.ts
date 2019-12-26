export interface UserState {
  isLogged: boolean;
  user: UserDefault;
}
export const lOGIN_USER = "user/lOGIN_USER";
export const LOGOUT_USER = "user/LOGOUT_USER";

export interface UserDefault {
  userName: string;
  email: string;
}
export interface UserDetail extends UserDefault {
  password: string;
  confirmPassword: string;
}

interface LoginUserAction {
  type: typeof lOGIN_USER;
  payload: UserDetail;
}

interface LogoutUserAction {
  type: typeof LOGOUT_USER;
  payload: UserDefault;
}

export type UserActionTypes = LoginUserAction | LogoutUserAction;
