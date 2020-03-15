import React, { useEffect, useMemo, useState } from "react";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import styled from "styled-components";
import { Mx_Width } from "@Client/Styles/Device";

interface IProps {
  onChange: (value: Node[]) => void;
  value: Array<Node>;
}

const Editor = (props: IProps) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [values, setValue] = useState<Array<Node>>([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }]
    }
  ]);
  return (
    <Slate editor={editor} value={props.value} onChange={props.onChange}>
      <Editable
        onKeyDown={event => {
          console.log(event.key);
        }}
      />
    </Slate>
  );
};

export default Editor;
