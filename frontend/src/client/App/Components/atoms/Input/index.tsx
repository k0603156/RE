import styled from "styled-components";

export default styled.input`
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
