import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { createEditor, Node, Editor as BaseEditor } from "slate";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import { Mx_Width } from "@Client/Styles/Device";

interface IProps {
  onChange: (value: Node[]) => void;
  value: Array<Node>;
  readOnly?: boolean;
}

const Toolbar = styled.div`
  position: relative;
  padding: 2px 18px 2px;
  margin: 0 -20px;
  border-top: 2px solid lightgray;
  border-bottom: 2px solid lightgray;
  margin-bottom: 20px;
  & > * {
    display: inline-block;
  }
  & > * + * {
    margin-left: 15px;
  }
`;
const StyledEditable = styled(Editable)`
  height: 300px;
  padding: 0.3rem;
  border: 1px solid lightgray;
  border-bottom: none;
  box-shadow: 5px 5px 10px rgb(47, 44, 55);
`;
const isMarkActive = (editor: any, format: any) => {
  const marks = BaseEditor.marks(editor);
  return marks ? marks[format] === true : false;
};

const MarkButton = (format: any) => {
  const editor = useSlate();
  return (
    <button
      type="button"
      disabled={isMarkActive(editor, format)}
      onMouseDown={(event) => {
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
      {/* <Toolbar>
        <MarkButton format="bold" />
      </Toolbar> */}
      <StyledEditable
        onKeyDown={(event) => {
          // console.log(event.key);
        }}
      />
    </Slate>
  );
};

export default Editor;
