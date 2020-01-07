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
  placeholder?: string;
  value: any;
  setValue: any;
  options: Array<option>;
}
const Box = styled.div`
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
const OptionUl = styled.ul`
  background: white;
  width: 100%;
  max-height: 200px;
  overflow-y: scroll;
`;

const OptionLi = styled.li`
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
const SearchableSelect = ({
  className,
  id,
  placeholder,
  value,
  setValue,
  options
}: IProps) => {
  const box = useRef(document.createElement("div"));
  const searchInput = useRef(document.createElement("input"));
  const [searchValue, setSearchValue] = useState("");
  const [toggle, setToggle] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("click", (event: any) => {
  //     !box.current.contains(event.target) && setToggle(false);
  //   });
  //   return () => {
  //     window.removeEventListener("click", (event: any) => {
  //       !box.current.contains(event.target) && setToggle(false);
  //     });
  //   };
  // }, []);

  const inputClick = () => {
    setToggle(true);
    setTimeout(() => {
      searchInput.current.focus();
    }, 500);
  };
  const optionClick = (e: any) => {
    setValue(e.target.dataset.country);
    setToggle(false);
  };
  const optionList = options
    .filter(option => option.name.includes(searchValue))
    .map(option => (
      <OptionLi
        key={option.key}
        data-country={option.value}
        onClick={optionClick}
      >
        {option.name}
      </OptionLi>
    ));
  return (
    <Box className={className} ref={box}>
      <SelectedInput
        id={id}
        placeholder={placeholder}
        value={value}
        onClick={inputClick}
        readOnly
      />
      <SearchableWrap className={toggle ? "open" : "close"}>
        <SearchableInput
          placeholder={"Search"}
          ref={searchInput}
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <OptionUl>{optionList}</OptionUl>
      </SearchableWrap>
    </Box>
  );
};

export default SearchableSelect;
