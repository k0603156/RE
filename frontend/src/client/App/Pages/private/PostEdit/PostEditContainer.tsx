import React, { useState, useEffect } from "react";
import { Node } from "slate";
import { debounce } from "lodash";
import { connect } from "react-redux";
import Presenter from "./PostEditPresenter";
import { RootStateType } from "@Services/Store/modules";
import { postCreateAction } from "@Services/Store/modules/Post/actions";
import { IPostCreatePayload } from "@Services/Store/modules/Post/types";
import { boardlistBrowseAction } from "@Services/Store/modules/Main/actions";

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
    hashtags: [],
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
