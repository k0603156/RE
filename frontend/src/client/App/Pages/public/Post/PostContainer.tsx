import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import PostPresenter from "./PostPresenter";
import { RootStateType } from "@Services/Store/modules";
import { postBrowseAction } from "@Services/Store/modules/Post/actions";

export interface IProps extends RouteComponentProps<{ postId: string }> {
  title: RootStateType["post"]["title"];
  updatedAt: RootStateType["post"]["updatedAt"];
  hashtags: RootStateType["post"]["hashtags"];
  userName: RootStateType["post"]["user"]["userName"];
  content: RootStateType["post"]["content"];
  postBrowseAction: typeof postBrowseAction;
}

const PostContainer = withRouter((props: IProps) => {
  const {
    title,
    content,
    hashtags,
    updatedAt,
    userName,
    match: {
      params: { postId },
    },
    postBrowseAction,
  } = props;

  useEffect(() => {
    postBrowseAction(postId);
    return () => {};
  }, [postId]);

  return (
    <PostPresenter
      title={title}
      content={content}
      hashtags={hashtags}
      updatedAt={updatedAt}
      userName={userName}
    />
  );
});

export default connect(
  ({ post, loading }: RootStateType) => ({
    title: post.title,
    content: post.content,
    hashtags: post.hashtags,
    updatedAt: post.updatedAt,
    userName: post.user.userName,
  }),
  {
    postBrowseAction,
  }
)(PostContainer);
