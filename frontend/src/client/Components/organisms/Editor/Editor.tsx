import React, { useEffect, useMemo, useState } from "react";
import { createEditor, Node, Editor as BaseEditor } from "slate";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import styled from "styled-components";
import { Mx_Width } from "@Client/Styles/Device";

interface IProps {
  onChange: (value: Node[]) => void;
  value: Array<Node>;
}

const Toolbar = styled.div`
  position: relative;
  padding: 1px 18px 17px;
  margin: 0 -20px;
  border-bottom: 2px solid #eee;
  margin-bottom: 20px;
  & > * {
    display: inline-block;
  }
  & > * + * {
    margin-left: 15px;
  }
`;
const isMarkActive = (editor: any, format: any) => {
  const marks = BaseEditor.marks(editor);
  return marks ? marks[format] === true : false;
};

const MarkButton = (format: any) => {
  const editor = useSlate();
  return (
    <button
      disabled={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault();
      }}
    >
      <span>I</span>
    </button>
  );
};

const Editor = (props: IProps) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  return (
    <Slate editor={editor} value={props.value} onChange={props.onChange}>
      <Toolbar>
        <MarkButton format="bold" />
      </Toolbar>
      <Editable
        onKeyDown={event => {
          console.log(event.key);
        }}
      />
    </Slate>
  );
};

export default Editor;
