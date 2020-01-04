export const CREATE_USER = "user/CREATE_USER";
export const CREATE_USER_SUCCESS = "user/CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "user/CREATE_USER_FAILURE";

interface create_user_action {
  type: typeof CREATE_USER;
  payload: {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
}

export type USER_ACTION_TYPES = create_user_action;
