import React, { useState } from "react";
import styled from "styled-components";

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: any;
  required?: boolean;
  entity?: string;
  defaultValue?: string;
  value?: string;
  onChange: (e: any) => any;
}
const InputBox = styled.input`
  border-bottom: 1px solid black;
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
  required = true,
  entity,
  defaultValue,
  value,
  onChange
}: IProps) => {
  const Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = {
      ...e
    };
    onChange(event);
  };
  return (
    <>
      <InputBox
        className={className}
        id={id}
        required={required}
        data-entity={entity}
        value={value}
        defaultValue={defaultValue}
        onChange={Change}
        type={"file"}
      ></InputBox>
    </>
  );
};

export default Input;
