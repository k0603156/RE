import styled from "styled-components";

export default styled.input`
  ${({ theme }) => `
    ${theme.DEFAULT.BORDER_RADIUS}
    ${theme.FONT_STYLES.MONTSERRAT.SMALL.REGULAR.BLACK}
  `};
  border: 1px solid black;
  height: 35px;
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
