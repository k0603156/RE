import React from "react";
import { Node } from "slate";
import { Editor } from "@Client/Components/organisms";
import { RootStateType } from "@Store/modules";

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
        <input
          onChange={e => props.onChange("title", e.target.value)}
          value={props.value.title}
        />
        <br />
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
        <button type="submit">글쓰기</button>
      </form>
    </div>
  );
};
