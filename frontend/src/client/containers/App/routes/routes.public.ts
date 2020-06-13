import {
  PublicMain,
  PublicBoard,
  PublicPost,
} from "client/containers/Pages/public";

export default {
  Main: {
    component: PublicMain,
    path: "/",
  },
  Board: {
    component: PublicBoard,
    path: "/board/:boardId",
  },
  Post: {
    component: PublicPost,
    path: "/board/post/:postId",
  },
};
