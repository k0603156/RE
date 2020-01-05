import React from "react";
import styled from "styled-components";

interface IProps {
  className?: any;
  id?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "password" | "text" | "url" | "email" | "date";
  pattern?: string;
  autoFocus?: boolean;
  minLength?: number;
  maxLength?: number;
  title?: string;
}
const InputBox = styled.input.attrs(props => ({
  type: props.type,
  value: props.value,
  pattern: props.pattern
}))`
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

const Input = ({
  className,
  id,
  placeholder,
  required = true,
  value,
  onChange,
  type = "text",
  pattern,
  autoFocus = false,
  minLength,
  maxLength,
  title
}: IProps) => (
  <InputBox
    className={className}
    id={id}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
    pattern={pattern}
    autoFocus={autoFocus}
    minLength={minLength}
    maxLength={maxLength}
    title={title}
  />
);

export default Input;
