import React from "react";
import { connect } from "react-redux";
import {
  set_content_header,
  set_content,
  add_content
} from "Store/modules/Post/actions";

import WritePresenter from "./WritePresenter";
import useInput from "Hooks/useInput";

const WriteContainer = (props: {
  post: any;
  set_content_header: any;
  set_content: any;
  add_content: any;
}) => {
  const onSubmit = async (e: any) => {
    e.preventDefault();
  };
  return (
    <WritePresenter
      post={props.post}
      set_content_header={props.set_content_header}
      set_content={props.set_content}
      add_content={props.add_content}
      onSubmit={onSubmit}
    />
  );
};

export default connect(
  ({ post, loading }: RootStateType) => ({
    post
  }),
  { set_content_header, set_content, add_content }
)(WriteContainer);
