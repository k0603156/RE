import { PublicMain, PublicBoard, PublicPost } from "@Client/App/Pages/public";

export default {
  Main: {
    component: PublicMain,
    path: "/",
  },
  Board: {
    component: PublicBoard,
    path: "/board/:boardName",
  },
  Post: {
    component: PublicPost,
    path: "/board/post/:postId",
  },
};
