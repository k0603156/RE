import React from "react";
import { connect } from "react-redux";
import {
  set_content_header,
  set_content,
  add_content
} from "Store/modules/Post/actions";

import Presenter from "./Presenter";
import useInput from "Hooks/useInput";

const Container = (props: {
  post: any;
  set_content_header: any;
  set_content: any;
  add_content: any;
}) => {
  const onSubmit = async (e: any) => {
    e.preventDefault();
  };
  return (
    <Presenter
      post={props.post}
      set_content_header={props.set_content_header}
      set_content_body={props.set_content}
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
)(Container);