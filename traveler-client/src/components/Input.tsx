import React from "react";
import styled from "styled-components";

interface IProps {
  className?: any;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "password" | "text" | "url" | "email";
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
  font-size: 12px;
  padding: 0px 15px;
`;

const Input = ({
  className,
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
