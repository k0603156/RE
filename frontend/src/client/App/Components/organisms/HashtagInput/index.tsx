/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  tags: Array<{ name: string }>;
  setTags: (value: string) => void;
  maxTags: number;
}
export default styled((props: IProps) => {
  const [state, setState] = useState({ input: "", error: false, message: "" });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, input: e.currentTarget.value });
  };
  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      switch (true) {
        case props.tags.some((tag) => tag.name === e.currentTarget.value):
          setState({
            ...state,
            error: true,
            message: "이미 추가된 태그입니다.",
          });
          break;
        case props.tags.length === props.maxTags:
          setState({
            ...state,
            error: true,
            message: "더 이상 추가할 수 없습니다.",
          });
          break;
        default:
          props.setTags(e.currentTarget.value);
          setState({ ...state, error: false, message: "", input: "" });
          break;
      }
    } else {
      setState({ ...state, error: false, message: "" });
    }
  };
  return (
    <div className={props.className}>
      {props.tags.map((tag) => (
        <span key={tag.name}>#{tag.name}</span>
      ))}
      <input
        placeholder="태그입력"
        value={state.input}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
      {state.error && <p>{state.message}</p>}
    </div>
  );
})`
  display: flex;
  flex-wrap: wrap;
  span {
    margin: 0 5px;
    font-weight: 600;
  }
  input {
    flex: 1;
    padding-left: 1px;
    border: none;
    border-bottom: 1px solid lightgray;
    outline: none;
    &:focus {
      border-bottom: 1px solid gray;
    }
  }
  p {
    width: 100%;
    font-size: 0.8rem;
    margin: 3px 5px;
  }
`;
