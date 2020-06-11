import { createAction } from "typesafe-actions";
import { MSG_CREATE, MSG_CLEAR } from "./types";

export const msgCreate = createAction(
  MSG_CREATE,
  (actionType, msgType: "ALERT" | "ERROR", Message) => {
    return { actionType, msgType, Message };
  },
)();
export const msgClear = createAction(MSG_CLEAR, () => {
  return {};
})();
