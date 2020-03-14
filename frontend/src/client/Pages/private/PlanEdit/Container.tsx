import React from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";
import {
  input_plan_header,
  input_plan_story,
  increase_story,
  decrease_story,
  create_plan
} from "@Store/modules/Plan/actions";
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

  function inputPlanHeader(event: React.ChangeEvent<any>) {
    _debounce(
      props.input_plan_header,
      event.currentTarget.name,
      event.currentTarget.value
    );
  }
  function inputPlanStory(event: React.ChangeEvent<any>) {
    _debounce(
      props.input_plan_story,
      Number(event.currentTarget.dataset.idx),
      event.currentTarget.name,
      event.currentTarget.value
    );
  }
  function increaseStory() {
    props.increase_story();
  }
  function decreaseStory() {
    props.decrease_story();
  }
  const onSubmit = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    props.create_plan(props.plan);
    console.log("submit");
  };

  return (
    <Presenter
      plan={props.plan}
      input_plan_header={inputPlanHeader}
      input_plan_story={inputPlanStory}
      increase_story={increaseStory}
      onSubmit={onSubmit}
    />
  );
};

export default connect(
  ({ plan, loading }: RootStateType) => ({
    plan
  }),
  {
    input_plan_header,
    input_plan_story,
    increase_story,
    decrease_story,
    create_plan
  }
)(Container);
