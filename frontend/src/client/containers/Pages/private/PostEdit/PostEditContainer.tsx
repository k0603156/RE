import React, { useState, useEffect } from "react";
import { Node } from "slate";
import { connect } from "react-redux";
import { RootStateType } from "client/services/Store/modules";
import { postCreateAction } from "client/services/Store/modules/Post/actions";
import { IPostCreatePayload } from "client/services/Store/modules/Post/types";
import { boardlistBrowseAction } from "client/services/Store/modules/Main/actions";
import Presenter from "./PostEditPresenter";

export interface IProps {
  main: RootStateType["main"];
  postCreateAction: typeof postCreateAction;
  boardlistBrowseAction: typeof boardlistBrowseAction;
}
const Container = ({
  main,
  postCreateAction,
  boardlistBrowseAction,
}: IProps) => {
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
    main.boardlist.length === 0 && boardlistBrowseAction();
    return () => {};
  }, []);

  const onSubmit = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    postCreateAction(postState);
  };

  const onChange = (
    key: keyof IPostCreatePayload,
    value: Array<Node> | string,
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
      initData={{ boardlist: main.boardlist }}
    />
  );
};

export default connect(
  ({ main }: RootStateType) => ({
    main,
  }),
  { boardlistBrowseAction, postCreateAction },
)(Container);
