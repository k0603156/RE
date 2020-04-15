import React, { useState, useEffect } from "react";
import { Node } from "slate";
import { connect } from "react-redux";
import { debounce } from "lodash";
import { postCreateAction } from "@Store/modules/Post/actions";
import { boardlistBrowseAction } from "@Store/modules/Main/actions";
import Presenter from "./PostEditPresenter";
import { RootStateType } from "@Store/modules";
import { IPostCreatePayload } from "@Store/modules/Post/types";

export interface IProps {
  main: RootStateType["main"];
  postCreateAction: typeof postCreateAction;
  boardlistBrowseAction: typeof boardlistBrowseAction;
}
const Container = (props: IProps) => {
  const [postState, setPostState] = useState<IPostCreatePayload>({
    title: "",
    boardId: "1",
    content: [
      {
        type: "paragraph",
        children: [{ text: "" }],
      },
    ],
    hashtags: [{ name: "tag2" }],
  });

  useEffect(() => {
    props.main.boardlist.length == 0 && props.boardlistBrowseAction();
    return () => {};
  }, []);

  const onSubmit = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    props.postCreateAction(postState);
  };

  const onChange = (
    key: keyof IPostCreatePayload,
    value: Array<Node> | string
  ) => {
    switch (key) {
      case "content":
        setPostState({ ...postState, content: [...(value as Array<Node>)] });
        break;
      case "hashtags":
        setPostState({
          ...postState,
          hashtags: [...postState.hashtags, { name: value as string }],
        });
        break;
      default:
        setPostState({ ...postState, [key]: value });
    }
  };
  return (
    <Presenter
      onSubmit={onSubmit}
      onChange={onChange}
      postData={postState}
      initData={{ boardlist: props.main.boardlist }}
    />
  );
};

export default connect(
  ({ main, loading }: RootStateType) => ({
    main,
  }),
  { boardlistBrowseAction, postCreateAction }
)(Container);

// const _debounce = debounce(
//   (f: (...any: (string | number)[]) => void, ...arr: (string | number)[]) =>
//     f(...arr),
//   50
// );
