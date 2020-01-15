import React, { useState } from "react";
import styled from "styled-components";

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: any;
  required?: boolean;
  entity?: string;
  type?: "password" | "text" | "url" | "email" | "date" | "file";
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string;
  value?: string;
  onChange: (e: any) => any;
}
const InputBox = styled.input`
  border: 1px solid black;
  border-radius: 7px;
  height: 35px;
  width: 100%;
  font-size: 12px;
  padding: 0px 15px;
  margin: 5px 0;
  &[type="date"]::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
  }
  &[type="date"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
`;
const TextCounter = styled.div`
  display: flex;
  justify-content: flex-end;
  > span {
    color: ${props => props.color};
  }
`;
const Input = ({
  className,
  id,
  placeholder,
  required = true,
  entity,
  type = "text",
  pattern,
  minLength,
  maxLength,
  defaultValue,
  value,
  onChange
}: IProps) => {
  const [count, setCount] = useState(0);
  const Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = {
      ...e
    };
    setCount(event.currentTarget.value.length);
    onChange(event);
  };
  const color = maxLength && count < maxLength ? "black" : "red";
  return (
    <>
      <InputBox
        className={className}
        id={id}
        placeholder={placeholder}
        required={required}
        data-entity={entity}
        value={value}
        defaultValue={defaultValue}
        onChange={Change}
        type={type}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        autoComplete={"off"}
      ></InputBox>
      {maxLength && (
        <TextCounter color={color}>
          <span>{count}</span>/{maxLength}
        </TextCounter>
      )}
    </>
  );
};

export default Input;
