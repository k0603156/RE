import React from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";
import {
  input_plan,
  input_story,
  increase_story,
  decrease_story,
  create_plan
} from "@Store/modules/Plan/actions";
import Presenter from "./Presenter";

const Container = (props: {
  plan: any;
  input_plan: any;
  input_story: any;
  increase_story: any;
  decrease_story: any;
  create_plan: any;
}) => {
  const _debounce = debounce(
    (f: (...any: (string | number)[]) => void, ...arr: (string | number)[]) =>
      f(...arr),
    50
  );

  function inputPlan(event: React.ChangeEvent<any>) {
    _debounce(
      props.input_plan,
      event.currentTarget.name,
      event.currentTarget.value
    );
  }
  function inputStory(event: React.ChangeEvent<any>) {
    _debounce(
      props.input_story,
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
      input_plan={inputPlan}
      input_story={inputStory}
      increase_story={increaseStory}
      onSubmit={onSubmit}
    />
  );
};

export default connect(
  ({ plan, loading }: RootStateType) => ({
    plan
  }),
  { input_plan, input_story, increase_story, decrease_story, create_plan }
)(Container);
