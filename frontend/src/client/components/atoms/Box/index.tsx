import styled from "styled-components";

export default styled.div`
  ${({ theme }) => `
    ${theme.DEFAULT.BOX_SHADOW}
    ${theme.DEFAULT.BORDER_RADIUS}
  `};
  padding: 25px 12px;
`;
