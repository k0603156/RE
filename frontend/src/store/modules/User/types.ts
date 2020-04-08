// 사용자 정보 요청
export const USER_SELECT_REQUEST = "user/USER_SELECT_REQUEST";
export const USER_SELECT_SUCCESS = "user/USER_SELECT_SUCCESS";
export const USER_SELECT_FAILURE = "user/USER_SELECT_FAILURE";
// 사용자 가입
export const USER_CREATE_REQUEST = "user/USER_CREATE_REQUEST";
export const USER_CREATE_SUCCESS = "user/USER_CREATE_SUCCESS";
export const USER_CREATE_FAILURE = "user/USER_CREATE_FAILURE";
// 사용자 정보수정
export const USER_UPDATE_REQUEST = "user/USER_UPDATE_REQUEST";
export const USER_UPDATE_SUCCESS = "user/USER_UPDATE_SUCCESS";
export const USER_UPDATE_FAILURE = "user/USER_UPDATE_FAILURE";
// 사용자 탈퇴
export const USER_DELETE_REQUEST = "user/USER_DELETE_REQUEST";
export const USER_DELETE_SUCCESS = "user/USER_DELETE_SUCCESS";
export const USER_DELETE_FAILURE = "user/USER_DELETE_FAILURE";

// 사용자 정보 요청
export interface IUserSelectRequest {
  type: typeof USER_SELECT_REQUEST;
  payload: {
    userName: string;
  };
}
// 사용자 가입
export interface IUserCreateRequest {
  type: typeof USER_CREATE_REQUEST;
  payload: {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  callback: () => void;
}
// 사용자 정보수정
export interface IUserUpdateRequest {
  type: typeof USER_UPDATE_REQUEST;
  payload: {
    userName: string;
    password: string;
    confirmPassword: string;
  };
}
// 사용자 탈퇴
export interface IUserDeleteRequest {
  type: typeof USER_DELETE_REQUEST;
  payload: {
    email: string;
  };
}
export type IUserAction =
  | IUserSelectRequest
  | IUserCreateRequest
  | IUserUpdateRequest
  | IUserDeleteRequest;

export interface InitialState {
  id: number;
  userName: string;
  posts: Array<any>;
}
