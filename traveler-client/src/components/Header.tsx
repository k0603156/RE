import React from "react";
import styled from "styled-components";
const Title = styled.div`
  /* T r a v e l e r */
  ${props => props.theme.headerAttr}
  left: 0;
  font-family: Montserrat Alternates;
  font-weight: 300;
  letter-spacing: 7px;
  border-bottom: 1px solid #000;
`;
const UserBox = styled.div`
  /* signIn */
  ${props => props.theme.headerAttr}
  right: 0;
`;
const Header = () => (
  <>
    <Title>Traveler</Title>
    <UserBox>signIn</UserBox>
  </>
);

export default Header;
