export interface CarouselState {
  offset: number;
  desired: number;
  active: number;
}

export interface CarouselNextAction {
  type: "next";
  length: number;
}

export interface CarouselPrevAction {
  type: "prev";
  length: number;
}

export interface CarouselJumpAction {
  type: "jump";
  desired: number;
}

export interface CarouselDoneAction {
  type: "done";
}

export interface CarouselDragAction {
  type: "drag";
  offset: number;
}

export type CarouselAction =
  | CarouselJumpAction
  | CarouselNextAction
  | CarouselPrevAction
  | CarouselDragAction
  | CarouselDoneAction;
