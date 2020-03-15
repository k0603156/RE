import React from "react";
import { Node } from "slate";
import { SearchableSelector } from "@Client/Components/molecules";
import { Editor } from "@Client/Components/organisms";

export default (props: {
  onSubmit: (event: React.ChangeEvent<any>) => void;
  onChange: (value: Array<Node>) => void;
  value: Array<Node>;
}) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <Editor onChange={props.onChange} value={props.value} />
      </form>
    </div>
  );
};
