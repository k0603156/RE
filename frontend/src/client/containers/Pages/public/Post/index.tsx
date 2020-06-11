import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { RootStateType } from "client/services/store";
import { postBrowseAction } from "./actions";
import PostTemplate from "client/components/templates/PostTemplate";

export interface IProps extends RouteComponentProps<{ postId: string }> {
  title: RootStateType["post"]["title"];
  updatedAt: RootStateType["post"]["updatedAt"];
  hashtags: RootStateType["post"]["hashtags"];
  userName: RootStateType["post"]["user"]["userName"];
  content: RootStateType["post"]["content"];
  postBrowseAction: typeof postBrowseAction;
}

const PostContainer = withRouter(
  ({
    title,
    content,
    hashtags,
    updatedAt,
    userName,
    match: {
      params: { postId },
    },
    postBrowseAction,
  }: IProps) => {
    useEffect(() => {
      postBrowseAction(postId);
      return () => {};
    }, [postId]);

    return (
      <PostTemplate
        title={title}
        content={content}
        hashtags={hashtags}
        updatedAt={updatedAt}
        userName={userName}
      />
    );
  },
);

export default connect(
  ({ post }: RootStateType) => ({
    title: post.title,
    content: post.content,
    hashtags: post.hashtags,
    updatedAt: post.updatedAt,
    userName: post.user.userName,
  }),
  {
    postBrowseAction,
  },
)(PostContainer);
