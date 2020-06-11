import { createReducer } from "typesafe-actions";
import { MSG_CREATE, MSG_CLEAR, InitialState } from "./types";

const initialState: InitialState = {
  isAlert: false,
  actionType: "",
  msgType: "ALERT",
  message: "",
  status: "",
};

const msgReducer = createReducer(initialState, {
  [MSG_CREATE]: (state: any, action: any) => {
    const { actionType, msgType, Message } = action.payload;
    return {
      isAlert: true,
      actionType,
      msgType,
      message: Message.response?.data.message || Message.message,
      status: Message.response?.status || "localErr",
    };
  },
  [MSG_CLEAR]: () => {
    return {
      isAlert: false,
      actionType: "",
      msgType: "ALERT",
      message: "",
      status: "",
    };
  },
});

export default msgReducer;
