// 사용자 정보 요청
export const PROFILE_SELECT_REQUEST = "profile/PROFILE_SELECT_REQUEST";
export const PROFILE_SELECT_SUCCESS = "profile/PROFILE_SELECT_SUCCESS";
export const PROFILE_SELECT_FAILURE = "profile/PROFILE_SELECT_FAILURE";

// 사용자 정보수정
export const PROFILE_UPDATE_REQUEST = "profile/PROFILE_UPDATE_REQUEST";
export const PROFILE_UPDATE_SUCCESS = "profile/PROFILE_UPDATE_SUCCESS";
export const PROFILE_UPDATE_FAILURE = "profile/PROFILE_UPDATE_FAILURE";
// 사용자 탈퇴
export const PROFILE_DELETE_REQUEST = "profile/PROFILE_DELETE_REQUEST";
export const PROFILE_DELETE_SUCCESS = "profile/PROFILE_DELETE_SUCCESS";
export const PROFILE_DELETE_FAILURE = "profile/PROFILE_DELETE_FAILURE";

// 사용자 정보 요청
export interface IProfileSelectRequest {
  type: typeof PROFILE_SELECT_REQUEST;
  payload: {
    userName: string;
  };
}

// 사용자 정보수정
export interface IProfileUpdateRequest {
  type: typeof PROFILE_UPDATE_REQUEST;
  payload: {
    userName: string;
    password: string;
    confirmPassword: string;
  };
}
// 사용자 탈퇴
export interface IProfileDeleteRequest {
  type: typeof PROFILE_DELETE_REQUEST;
  payload: {
    email: string;
  };
}
export type IProfileAction =
  | IProfileSelectRequest
  | IProfileUpdateRequest
  | IProfileDeleteRequest;

export interface InitialState {
  id: number;
  userName: string;
  posts: Array<any>;
}
