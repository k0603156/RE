import styled from "styled-components";

export default styled.button`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  ${({ theme }) => `
    ${theme.DEFAULT.BUTTON.BASE}
    ${theme.FONT_STYLES.MONTSERRAT.SMALL.BOLD.BLACK}
  `};
`;
