import React, { useState } from "react";
import { UserState } from "store/modules/User/types";
import styled from "styled-components";
import { Mx_Width } from "styles/Device";

import UMenu from "./UserMenu";

const Title = styled.div`
  /* T r a v e l e r */
  left: 0;
  ${props => props.theme.headerAttr}
  font-family: Montserrat Alternates;
  font-weight: 300;
  letter-spacing: 7px;
  border-bottom: 1px solid #000;
`;
const UserBox = styled.div`
  /* signIn */
  right: 0;
  min-width: 100px;
  ${props => props.theme.headerAttr}
  ${Mx_Width(`{
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
  }`).mobileL}
`;

const Header = (props: { headerAuth: UserState }) => {
  const [value, toggle] = useState(false);
  const onMouseEnter = () => {
    toggle(true);
  };
  const onMouseLeave = () => {
    toggle(false);
  };
  return (
    <>
      <Title>Traveler</Title>
      {props.headerAuth.isLogged ? (
        <UserBox onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {props.headerAuth.user.userName}
          <UMenu toggle={value} />
        </UserBox>
      ) : (
        <UserBox>signIn</UserBox>
      )}
    </>
  );
};

export default Header;
