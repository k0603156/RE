import React, { useMemo } from "react";
import styled from "styled-components";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
// import { maxWidth } from "@Client/Styles/Device";

interface IProps {
  onChange: (value: Node[]) => void;
  value: Array<Node>;
  readOnly?: boolean;
}

const StyledEditable = styled(Editable)`
  height: 300px;
  padding: 0.3rem;
  border: 1px solid lightgray;
  border-bottom: none;
  box-shadow: 5px 5px 10px rgb(47, 44, 55);
`;

const Editor = ({ onChange, value }: IProps) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  return (
    <Slate editor={editor} value={value} onChange={onChange}>
      {/* <Toolbar>
        <MarkButton format="bold" />
      </Toolbar> */}
      <StyledEditable
        onKeyDown={() => {
          // console.log(event.key);
        }}
      />
    </Slate>
  );
};

export default Editor;
