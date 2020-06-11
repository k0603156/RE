export const MSG_CREATE = "msg/MSG_CREATE";
export const MSG_CLEAR = "msg/MSG_CLEAR";
export interface InitialState {
  isAlert: boolean;
  msgType: string;
  actionType: any;
  status: any;
  message: string;
}
