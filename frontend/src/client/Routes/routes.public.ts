import { PublicMain, PublicBoard, PublicPost } from "@Client/Pages/public";
export default {
  Main: {
    component: PublicMain,
    path: "/"
  },
  Board: {
    component: PublicBoard,
    path: "/board/:boardName"
  },
  Post: {
    component: PublicPost,
    path: "/board/post/:postId"
  }
};
