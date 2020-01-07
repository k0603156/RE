import React from "react";
import { connect } from "react-redux";
import Presenter from "./Presenter";
import { set_content_header } from "Store/modules/Post/actions";
const Container = (props: { data: any; set_content_header: any }) => {
  const onChange = (e: any) => {
    props.set_content_header(e.target.id, e.target.value);
  };
  return <Presenter data={props.data} onChange={onChange} />;
};

export default connect(
  ({ post, loading }: RootStateType) => ({
    post
  }),
  { set_content_header }
)(Container);
