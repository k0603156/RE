import React from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";
import { create_plan } from "@Store/modules/Post/actions";
import Presenter from "./Presenter";

const Container = (props: {
  plan: any;
  input_plan_header: any;
  input_plan_story: any;
  increase_story: any;
  decrease_story: any;
  create_plan: any;
}) => {
  const _debounce = debounce(
    (f: (...any: (string | number)[]) => void, ...arr: (string | number)[]) =>
      f(...arr),
    50
  );

  function inputPlanStory(event: React.ChangeEvent<any>) {
    _debounce(
      props.input_plan_story,
      Number(event.currentTarget.dataset.idx),
      event.currentTarget.name,
      event.currentTarget.value
    );
  }

  const onSubmit = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    props.create_plan(props.plan);
    console.log("submit");
  };

  return <Presenter onSubmit={onSubmit} />;
};

export default connect(
  ({ plan, loading }: RootStateType) => ({
    plan
  }),
  {
    create_plan
  }
)(Container);
