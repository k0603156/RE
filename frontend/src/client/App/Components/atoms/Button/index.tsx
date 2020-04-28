import styled from "styled-components";

export default styled.button`
  outline: 0;
  border: 0;
  color: ${(props) => props.theme.blackColor};
  background-color: #fff;
  padding: 0px 7px;
  margin: 5px 5px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
`;
