import React, { useState, useCallback, memo } from "react";
import styled from "styled-components";

interface IProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  entity?: string;
  value: string;
  textMax: number;
  setChange: (e: any) => any;
}
const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid black;
  border-radius: 7px;
  box-shadow: 2px 3px 2px gray;
  font-size: 12px;
  padding: 10px 10px;
  min-height: 100px;
  resize: none;
  outline: 0;
  overflow-y: auto;
`;
const TextCounter = styled.div`
  display: flex;
  justify-content: flex-end;
  > span {
    color: ${props => props.color};
  }
`;
const BoxTextArea = ({
  entity,
  value,
  textMax,
  setChange,
  ...others
}: IProps) => {
  const [count, setCount] = useState(0);

  const Change = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value.length < textMax + 1) {
      setCount(e.currentTarget.value.length);
      setChange(e);
    }
  };

  const color = count < textMax ? "black" : "red";
  return (
    <div>
      <TextArea
        data-entity={entity}
        value={value}
        {...others}
        onChange={Change}
      />
      <TextCounter color={color}>
        <span>{count}</span>/{textMax}
      </TextCounter>
    </div>
  );
};

export default BoxTextArea;
