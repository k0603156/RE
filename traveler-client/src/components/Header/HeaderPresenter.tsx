import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Mx_Width } from "styles/Device";
import { UserState } from "store/modules/User/types";
import UMenu from "../UserMenu";

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
  text-align: right;
  ${props => props.theme.headerAttr}
  ${Mx_Width(`{
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
  }`).mobileL}
`;
interface IHeaderPresenter {
  MouseEnter: () => void;
  MouseLeave: () => void;
  Toggle: boolean;
  Auth: UserState;
}
export default ({ MouseEnter, MouseLeave, Toggle, Auth }: IHeaderPresenter) => {
  return (
    <>
      <Title>Traveler</Title>

      <UserBox onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
        {Auth.isLogged ? (
          <>
            {Auth.user.userName}
            <UMenu toggle={Toggle} />
          </>
        ) : (
          <Link to="/auth">Join</Link>
        )}
      </UserBox>
    </>
  );
};
