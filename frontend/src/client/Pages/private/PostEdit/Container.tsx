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
  postFillinAction: typeof postFillinAction;
  postCreateAction: typeof postCreateAction;
}) => {
  const _debounce = debounce(
    (f: (...any: (string | number)[]) => void, ...arr: (string | number)[]) =>
      f(...arr),
    50
  );

  const onSubmit = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    props.postCreateAction(props.post);
  };
  const onChange = (name: string, value: string | Array<Node>) => {
    props.postFillinAction(name, value);
  };
  return (
    <Presenter onSubmit={onSubmit} onChange={onChange} value={props.post} />
  );
};

export default connect(
  ({ post, loading }: RootStateType) => ({
    post
  }),
  { postFillinAction, postCreateAction }
)(Container);
