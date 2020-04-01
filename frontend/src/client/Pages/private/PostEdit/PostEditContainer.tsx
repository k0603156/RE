import React, { useEffect } from "react";
import { Node } from "slate";
import { connect } from "react-redux";
import { debounce } from "lodash";
import {
  postFillinAction,
  postCreateAction
} from "@Store/modules/Post/actions";
import { boardlistBrowseAction } from "@Store/modules/Main/actions";
import Presenter from "./PostEditPresenter";
import { RootStateType } from "@Store/modules";
export interface IProps {
  main: RootStateType["main"];
  post: RootStateType["post"];
  postFillinAction: typeof postFillinAction;
  postCreateAction: typeof postCreateAction;
  boardlistBrowseAction: typeof boardlistBrowseAction;
}
const Container = (props: IProps) => {
  const _debounce = debounce(
    (f: (...any: (string | number)[]) => void, ...arr: (string | number)[]) =>
      f(...arr),
    50
  );
  useEffect(() => {
    props.main.boardlist.length == 0 && props.boardlistBrowseAction();
    return () => {};
  }, []);
  const onSubmit = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    props.postCreateAction(props.post);
  };
  const onChange = (name: string, value: string | Array<Node>) => {
    props.postFillinAction(name, value);
  };
  return (
    <Presenter
      onSubmit={onSubmit}
      onChange={onChange}
      value={props.post}
      initData={{ boardlist: props.main.boardlist }}
    />
  );
};

export default connect(
  ({ main, post, loading }: RootStateType) => ({
    main,
    post
  }),
  { boardlistBrowseAction, postFillinAction, postCreateAction }
)(Container);
