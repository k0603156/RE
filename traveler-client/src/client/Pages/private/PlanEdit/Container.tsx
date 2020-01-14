import React from "react";
import { connect } from "react-redux";
import {
  input_plan,
  input_story,
  increase_story,
  create_plan
} from "@Client/Store/modules/Plan/actions";
import Presenter from "./Presenter";

const Container = (props: {
  plan: any;
  input_plan: any;
  input_story: any;
  increase_story: any;
  create_plan: any;
}) => {
  const onSubmit = async (e: any) => {
    e.preventDefault();
    props.create_plan(props.plan);
    console.log("submit");
  };
  return <Presenter {...props} onSubmit={onSubmit} />;
};

export default connect(
  ({ plan, loading }: RootStateType) => ({
    plan
  }),
  { input_plan, input_story, increase_story, create_plan }
)(Container);
