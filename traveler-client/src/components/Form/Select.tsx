import React from "react";
import styled from "styled-components";
interface option {
  key: string;
  value: string;
  name: string;
}
interface IProps {
  className?: any;
  options: option[];
}
const SelectBox = styled.select`
  border: 1px solid black;
  border-radius: 7px;
  height: 35px;
  width: 100%;
  font-size: 12px;
  padding: 0px 15px;
  outline: none;
`;
const OptionBox = styled.option``;
const Select = ({ className, options }: IProps) => {
  return (
    <SelectBox className={className}>
      {options.map(option => (
        <OptionBox key={option.key} value={option.value}>
          {option.name}
        </OptionBox>
      ))}
    </SelectBox>
  );
};

export default Select;
