import { createAction, createReducer } from "typesafe-actions";
import { LOADING_START, LOADING_FINISH } from "./types";

export const loadingStart = createAction(
  LOADING_START,
  (requestType) => requestType,
)();

export const loadingFinish = createAction(
  LOADING_FINISH,
  (requestType) => requestType,
)();
