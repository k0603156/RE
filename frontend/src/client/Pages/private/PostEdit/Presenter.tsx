import React from "react";
import { Node } from "slate";
import { SearchableSelector } from "@Client/Components/molecules";
import { Editor } from "@Client/Components/organisms";

export default (props: {
  onSubmit: (event: React.ChangeEvent<any>) => void;
  onChange: (name: string, value: Array<Node> | string) => void;
  value: { title: string; content: Array<Node> };
}) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          onChange={e => props.onChange("title", e.target.value)}
          value={props.value.title}
        />
        <Editor
          onChange={value => props.onChange("content", value)}
          value={props.value.content}
        />
        <button type="submit">글쓰기</button>
      </form>
    </div>
  );
};
