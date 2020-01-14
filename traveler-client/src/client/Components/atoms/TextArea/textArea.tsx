import React, { useState, useCallback, memo } from "react";
import styled from "styled-components";

interface IProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  entity?: string;
  maxLength: number;
  value?: string;
  defaultValue?: string;
  onChange: (e: any) => any;
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
  maxLength,
  onChange,
  value,
  defaultValue,
  ...others
}: IProps) => {
  const [count, setCount] = useState(0);

  const Change = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const event = {
      ...e
    };
    if (event.currentTarget.value.length < maxLength + 1) {
      setCount(event.currentTarget.value.length);
      onChange(event);
    }
  };
  const color = count < maxLength ? "black" : "red";
  return (
    <div>
      <TextArea
        data-entity={entity}
        {...others}
        onChange={Change}
        value={value}
        defaultValue={defaultValue}
        maxLength={maxLength}
      />
      {maxLength && (
        <TextCounter color={color}>
          <span>{count}</span>/{maxLength}
        </TextCounter>
      )}
    </div>
  );
};

export default BoxTextArea;
