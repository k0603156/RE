import styled from "styled-components";

const Box = styled.div`
  border-radius: 10px;
  box-shadow: 2px 3px 2px gray;
  padding: 25px 12px;
`;

const Button = styled.button`
  outline: 0;
  border: 0;
  color: ${props => props.theme.blackColor};
  background-color: #fff;
  padding: 0px 7px;
  margin: 5px 5px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
`;
const Input = styled.input`
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

const Badge = styled.span`
  box-sizing: border-box;
  padding: 3px 7px;
  border: 1px solid black;
  border-radius: 3px;
  font-size: 0.8rem;
`;

export { Input, Box, Button, TextArea, Badge };
