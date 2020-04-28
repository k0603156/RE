import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Mx_Width } from "@Client/Styles/Device";
import UMenu from "./UserMenu";
import { RootStateType } from "@Store/modules";

const Title = styled.div`
  /* Symphonia */
  left: 0;
  margin-left: ${(props) => props.theme.rootSideOffset};
  ${(props) => props.theme.headerAttr}
  font-family: Montserrat Alternates;
  font-weight: 300;
  letter-spacing: 7px;
  border-bottom: 1px solid #000;
`;
const UserBox = styled.div`
  /* signIn */
  right: 0;
  margin-right: ${(props) => props.theme.rootSideOffset};
  ${(props) => props.theme.headerAttr}
  min-width: 100px;
  text-align: right;
  ${Mx_Width(`{
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
  }`).mobileL}
`;
interface IProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  toggle: boolean;
  auth: RootStateType["auth"];
}
export default (props: IProps) => {
  const { auth, toggle, onMouseEnter, onMouseLeave } = props;
  return (
    <>
      <Title>
        <Link to="/">RE:* log</Link>
      </Title>

      <UserBox onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {auth.isLogged ? (
          <>
            {auth.me.userName}
            <UMenu toggle={toggle} />
          </>
        ) : (
          <Link to="/auth">Join</Link>
        )}
      </UserBox>
    </>
  );
};
