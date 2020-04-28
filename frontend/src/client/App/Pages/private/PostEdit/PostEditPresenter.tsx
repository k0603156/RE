import React from "react";
import { Node } from "slate";
import styled from "styled-components";
import {
  Editor,
  HashtagInput,
  ImageUploader,
} from "@Client/App/Components/organisms";
import { RootStateType } from "@Services/Store/modules";
import { IPostCreatePayload } from "@Services/Store/modules/Post/types";
interface IProps {
  className?: string;
  onSubmit: (event: React.ChangeEvent<any>) => void;
  onChange: (
    key: keyof IPostCreatePayload,
    value: Array<Node> | string
  ) => void;
  postData: IPostCreatePayload;
  initData: {
    boardlist: RootStateType["main"]["boardlist"];
  };
}
const BoardSelect = styled((props: Omit<IProps, "onSubmit">) => {
  return (
    <div className={props.className}>
      <label htmlFor={"boardselect"}>글분류</label>
      <select
        id={"boardselect"}
        value={props.postData.boardId}
        onChange={(e) => props.onChange("boardId", e.target.value)}
      >
        {props.initData.boardlist.map((board: { id: string; name: string }) => (
          <option key={board.id} value={board.id}>
            {board.name}
          </option>
        ))}
      </select>
    </div>
  );
})`
  display: flex;
  margin: 10px 0;
  color: rgb(21, 18, 31);
  label {
    margin-right: 10px;
  }
  select {
    flex: 1;
    border: 0;
    border-bottom: 1px solid rgb(21, 18, 31);
    outline: none;
  }
`;
export default styled((props: IProps) => {
  return (
    <div className={props.className}>
      <input
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
      <BoardSelect
        onChange={props.onChange}
        postData={props.postData}
        initData={props.initData}
      />
      <Editor
        onChange={(value) => props.onChange("content", value)}
        value={props.postData.content}
      />
      <ImageUploader />
      <button type="button" onClick={props.onSubmit}>
        글쓰기
      </button>
    </div>
  );
})`
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 5px 5px 10px rgb(47, 44, 55);
  > * {
    box-shadow: none;
    border: none;
  }
  input.title-input {
    width: 100%;
    padding: 0.3rem 0.7rem;
    line-height: 1.5rem;
    margin-bottom: 0.5rem;
  }
  button {
    width: 30%;
    margin: 15px auto;
    padding: 10px 0;
    border-radius: 10px;
    outline: none;
    background: rgb(21, 18, 31);
    box-shadow: 5px 5px 10px rgb(47, 44, 55);
    color: white;
    transition: transform 0.3s ease 0s;
    cursor: pointer;
    & :hover {
      background: rgb(47, 44, 55);
    }
  }
`;
