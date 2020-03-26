import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { RootStateType } from "@Store/modules";
import { postBrowseAction } from "@Store/modules/Post/actions";
import PostPresenter from "./PostPresenter";

export interface IProps extends RouteComponentProps<{ postId: string }> {
  post: RootStateType["post"];
  postBrowseAction: typeof postBrowseAction;
}

const PostContainer = withRouter((props: IProps) => {
  useEffect(() => {
    props.postBrowseAction(props.match.params.postId);

    return () => {};
  }, [props.match.params.postId]);
  return <PostPresenter post={props.post} />;
});
export default connect(({ post, loading }: RootStateType) => ({ post }), {
  postBrowseAction
})(PostContainer);
