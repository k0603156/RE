import styled from "styled-components";

export default styled.span`
  ${({ theme }) => `
    ${theme.FONT_STYLES.MONTSERRAT.SMALL.REGULAR.BLACK}
    ${theme.DEFAULT.BORDER_RADIUS}
  `};
  box-sizing: border-box;
  padding: 3px 7px;
  border: 1px solid black;
`;
