import React from "react";
import { Node } from "slate";
import styled from "styled-components";
import { HashtagInput } from "client/components/molecules";
import { Editor, ImageDndZone } from "client/components/organisms";
import { RootStateType } from "client/configureStore";
import { IPostCreatePayload } from "client/containers/Pages/public/Post/types";

interface IProps {
  className?: string;
  onSubmit: (event: React.ChangeEvent<any>) => void;
  onChange: (
    key: keyof IPostCreatePayload,
    value: Array<Node> | string,
  ) => void;
  postData: IPostCreatePayload;
  initData: {
    boardlist: RootStateType["main"]["boards"];
  };
}
const BoardSelect = styled(
  ({ className, onChange, postData, initData }: Omit<IProps, "onSubmit">) => {
    return (
      <div className={className}>
        <label htmlFor={className}>
          글분류
          <select
            id={className}
            value={postData.boardId}
            onChange={(e) => onChange("boardId", e.target.value)}
          >
            {initData.boardlist.map((board: { id: number; name: string }) => (
              <option key={board.id} value={board.id}>
                {board.name}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  },
)`
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
export default styled(
  ({ className, onSubmit, onChange, postData, initData }: IProps) => {
    return (
      <div className={className}>
        <input
          className="title-input"
          placeholder="제목을 입력하세요"
          onChange={(e) => onChange("title", e.target.value)}
          value={postData.title}
        />
        <HashtagInput
          tags={postData.hashtags}
          setTags={(value) => onChange("hashtags", value)}
          maxTags={5}
        />
        <BoardSelect
          onChange={onChange}
          postData={postData}
          initData={initData}
        />
        <Editor
          onChange={(value) => onChange("content", value)}
          value={postData.content}
        />
        <ImageDndZone />
        <button type="button" onClick={onSubmit}>
          글쓰기
        </button>
      </div>
    );
  },
)`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 15px;
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
