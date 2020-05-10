import React from "react";
import styled from "styled-components";
import { Editor as BaseEditor } from "slate";
import { useSlate } from "slate-react";

interface IProps {
  className?: string;
  format: "bold";
}
const isMarkActive = (editor: any, format: any) => {
  const marks = BaseEditor.marks(editor);
  return marks ? marks[format] === true : false;
};

const Toolbar = styled(({ className, format }: IProps) => {
  const editor = useSlate();
  return (
    <div className={className}>
      <button
        type="button"
        disabled={isMarkActive(editor, format)}
        onMouseDown={(event) => {
          event.preventDefault();
        }}
      >
        <span>I</span>
      </button>
    </div>
  );
})`
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

export default Toolbar;
