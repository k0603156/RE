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
    path: "/board/:boardName",
  },
  Post: {
    component: PublicPost,
    path: "/board/post/:postId",
  },
};
