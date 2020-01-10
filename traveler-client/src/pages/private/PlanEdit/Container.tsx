import React from "react";
import { connect } from "react-redux";
import {
  input_content_header,
  input_content_body,
  increase_content
} from "Store/modules/Plan/actions";
import Presenter from "./Presenter";

const Container = (props: {
  plan: any;
  input_content_header: any;
  input_content_body: any;
  increase_content: any;
}) => {
  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log("submit");
  };
  return <Presenter {...props} onSubmit={onSubmit} />;
};

export default connect(
  ({ plan, loading }: RootStateType) => ({
    plan
  }),
  { input_content_header, input_content_body, increase_content }
)(Container);
