/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { maxWidth } from "@Client/Styles/Device";
import { RootStateType } from "@Services/Store/modules";
import UMenu from "./UserMenu";

interface IProps {
  className?: string;
  toggleVisible: () => void;
  visible: boolean;
  auth: RootStateType["auth"];
}
export default styled(
  ({
    className,
    toggleVisible,
    visible,
    auth: {
      isLogged,
      me: { userName },
    },
  }: IProps) => {
    const UserMenu = isLogged ? (
      <div onClick={toggleVisible}>
        {userName}
        <UMenu toggle={visible} />
      </div>
    ) : (
      <Link to="/auth">Join</Link>
    );

    return (
      <>
        <div className={`${className} title`}>
          <Link to="/">RE:* log</Link>
        </div>

        <div className={`${className} userBox`}>{UserMenu}</div>
      </>
    );
  },
)`
  &.title {
    left: 0;
    margin-left: ${(props) => props.theme.rootSideOffset};
    ${(props) => props.theme.headerAttr}
    font-family: Montserrat Alternates;
    font-weight: 300;
    letter-spacing: 7px;
    border-bottom: 1px solid #000;
  }
  &.userBox {
    right: 0;
    margin-right: ${(props) => props.theme.rootSideOffset};
    ${(props) => props.theme.headerAttr}
    min-width: 100px;
    text-align: right;
    ${maxWidth(`{
      width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
    }`).mobileL}
    user-select:none;
  }
`;
