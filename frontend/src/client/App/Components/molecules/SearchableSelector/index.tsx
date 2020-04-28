import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
interface option {
  key: string;
  name: string;
  value: string;
}
interface IProps {
  className?: any;
  id?: string;
  entry?: any;
  value?: string;
  defaultValue?: string;
  onChange: (e: any) => any;
  options: Array<option>;
}
const Box = styled.div`
  position: relative;
  margin: 5px 0;
`;
const SelectedInput = styled.input`
  border: 1px solid black;
  border-radius: 7px;
  height: 35px;
  width: 100%;
  font-size: 12px;
  padding: 0px 15px;
  outline: none;
`;
const SearchableWrap = styled.div`
  position: absolute;
  background: white;
  width: 100%;
  &.close {
    display: none;
  }
`;
const SearchableInput = styled.input`
  height: 25px;
  width: 100%;
  font-size: 12px;
  padding: 0px 15px;
  outline: none;
`;
const OptionList = styled.ul`
  background: white;
  width: 100%;
  max-height: 200px;
  overflow-y: scroll;
`;

const Option = styled.li`
  border-left: 1px solid black;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  padding: 0px 15px;
  cursor: pointer;
  &:hover {
    background: rgba(200, 200, 200, 0.7);
  }
`;
export default ({
  className,
  id,
  entry,
  value,
  defaultValue,
  onChange,
  options,
}: IProps) => {
  const box = useRef(document.createElement("div"));
  const searchInput = useRef(document.createElement("input"));
  const [toggle, setToggle] = useState<boolean>(false);
  const [searchForm, setSearchForm] = useState("");
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const outSideClick = (event: any) => {
    box.current && !box.current.contains(event.target) && setToggle(false);
  };
  useEffect(() => {
    window.addEventListener("click", outSideClick);
    return () => {
      window.removeEventListener("click", outSideClick);
    };
  }, []);

  const onFormClick = () => {
    setToggle(true);
    setTimeout(() => {
      searchInput.current.focus();
    }, 500);
  };

  const onSearchFormChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchForm(event.target.value);

  const onOptionClick = (e: any) => {
    const event = {
      ...e,
    };
    setSelectedOption(event.target.dataset.displayValue);
    onChange(event);
    setToggle(false);
  };

  const searchedArray = options
    .filter((option) => option.name.includes(searchForm))
    .map((option) => (
      <Option
        key={option.key}
        value={option.key}
        data-entity={entry}
        data-display-value={option.value}
        onClick={onOptionClick}
      >
        {option.name}
      </Option>
    ));

  return (
    <Box className={className} id={id} ref={box}>
      <SelectedInput onClick={onFormClick} value={selectedOption} readOnly />
      <SearchableWrap className={toggle ? "open" : "close"}>
        <SearchableInput
          ref={searchInput}
          placeholder={"검색"}
          value={searchForm}
          onChange={onSearchFormChange}
        />
        <OptionList>{searchedArray}</OptionList>
      </SearchableWrap>
    </Box>
  );
};
