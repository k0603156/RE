import React from "react";
import styled from "styled-components";
import { Node } from "slate";
import { Editor, HashtagInput } from "@Client/Components/molecules";
import { RootStateType } from "@Store/modules";
import { IPostCreatePayload } from "@Store/modules/Post/types";

const Input = styled.input``;

const PostEditPresenter = styled.div`
  input.title-input {
    width: 100%;
    padding: 0.3rem 0.7rem;
    line-height: 1.5rem;
    margin-bottom: 0.5rem;
    border: 1px solid lightgray;
    box-shadow: inset 1px 1px 2px lightgray;
  }
  button {
    padding: 0.3rem 0.7rem;
    box-shadow: 2px 2px 4px gray;
    border: none;
    border-left: 1px solid lightgray;
    outline: none;
    float: right;
    background: white;
    & :hover {
    }
  }
`;
export default (props: {
  onSubmit: (event: React.ChangeEvent<any>) => void;
  onChange: (
    key: keyof IPostCreatePayload,
    value: Array<Node> | string
  ) => void;
  postData: IPostCreatePayload;
  initData: {
    boardlist: RootStateType["main"]["boardlist"];
  };
}) => {
  return (
    <PostEditPresenter>
      <Input
        className={"title-input"}
        placeholder="제목을 입력하세요"
        onChange={(e) => props.onChange("title", e.target.value)}
        value={props.postData.title}
      />
      <HashtagInput
        tags={props.postData.hashtags}
        setTags={(value) => props.onChange("hashtags", value)}
        maxTags={5}
      />
      <label>글 분류</label>
      <select
        value={props.postData.boardId}
        onChange={(e) => props.onChange("boardId", e.target.value)}
      >
        {props.initData.boardlist.map((board: { id: string; name: string }) => (
          <option key={board.id} value={board.id}>
            {board.name}
          </option>
        ))}
      </select>

      <Editor
        onChange={(value) => props.onChange("content", value)}
        value={props.postData.content}
      />
      <button type="button" onClick={props.onSubmit}>
        글쓰기
      </button>
    </PostEditPresenter>
  );
};
