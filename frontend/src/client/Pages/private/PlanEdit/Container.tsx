import React from "react";
import { Node } from "slate";
import { connect } from "react-redux";
import { debounce } from "lodash";
import {
  postFillinAction,
  postCreateAction
} from "@Store/modules/Post/actions";
import Presenter from "./Presenter";
import { RootStateType } from "@Store/modules";

const Container = (props: {
  post: RootStateType["post"];
  postFillinAction: any;
  postCreateAction: any;
}) => {
  const _debounce = debounce(
    (f: (...any: (string | number)[]) => void, ...arr: (string | number)[]) =>
      f(...arr),
    50
  );

  function inputPlanStory(event: React.ChangeEvent<any>) {
    _debounce(event.currentTarget.name, event.currentTarget.value);
  }

  const onSubmit = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    props.postCreateAction();
  };
  const onChange = (value: Array<Node>) => {
    props.postFillinAction(value);
  };
  return (
    <Presenter
      onSubmit={onSubmit}
      onChange={onChange}
      value={props.post.content}
    />
  );
};

export default connect(
  ({ post, loading }: RootStateType) => ({
    post
  }),
  { postFillinAction, postCreateAction }
)(Container);
