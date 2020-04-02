import React from "react";
import styled from "styled-components";
import { Node } from "slate";
import { Editor } from "@Client/Components/organisms";
import { RootStateType } from "@Store/modules";

const Input = styled.input`
  width: 100%;
  padding: 0.3rem 0.7rem;
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid lightgray;
  box-shadow: inset 1px 1px 2px gray;
`;
const Button = styled.button`
  padding: 0.3rem 0.7rem;
  box-shadow: 2px 2px 4px gray;
  border: none;
  border-left: 1px solid lightgray;
  outline: none;
  float: right;
  & :hover {
  }
`;
export default (props: {
  onSubmit: (event: React.ChangeEvent<any>) => void;
  onChange: (name: string, value: Array<Node> | string) => void;
  value: { title: string; boardId: string; content: Array<Node> };
  initData: {
    boardlist: RootStateType["main"]["boardlist"];
  };
}) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <Input
          placeholder="제목을 입력하세요"
          onChange={e => props.onChange("title", e.target.value)}
          value={props.value.title}
        />
        <label>글 분류</label>
        <select
          value={props.value.boardId}
          onChange={e => props.onChange("boardId", e.target.value)}
        >
          {props.initData.boardlist.map(
            (board: { id: string; name: string }) => (
              <option key={board.id} value={board.id}>
                {board.name}
              </option>
            )
          )}
        </select>
        <Editor
          onChange={value => props.onChange("content", value)}
          value={props.value.content}
        />
        <Button type="submit">글쓰기</Button>
      </form>
    </div>
  );
};
