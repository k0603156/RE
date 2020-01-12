import React, { useState, useCallback, memo } from "react";
import styled from "styled-components";

interface IProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  entity?: string;
  textMax: number;
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
  textMax,
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
    if (event.currentTarget.value.length < textMax + 1) {
      setCount(event.currentTarget.value.length);
      onChange(event);
    }
  };
  const color = count < textMax ? "black" : "red";
  return (
    <div>
      <TextArea
        data-entity={entity}
        ref={ta => {
          if (ta && ta.value.length > textMax) {
            ta.setRangeText(ta.value.slice(0, textMax));
          }
        }}
        {...others}
        onChange={Change}
        value={value}
        defaultValue={defaultValue}
        maxLength={textMax}
      />
      <TextCounter color={color}>
        <span>{count}</span>/{textMax}
      </TextCounter>
    </div>
  );
};

export default BoxTextArea;
