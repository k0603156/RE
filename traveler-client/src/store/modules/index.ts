import { combineReducers } from "redux";
import { userReducer } from "./User/reducers";

const rootReducer = combineReducers({
  userReducer
});
export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer;
