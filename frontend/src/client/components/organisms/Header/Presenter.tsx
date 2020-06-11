import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RootStateType } from "client/services/Store/modules";
import { maxWidth } from "client/styles/DeviceBreakpoints";
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
      <div
        onClick={toggleVisible}
        onKeyUp={() => {}}
        role="button"
        tabIndex={0}
      >
        {userName}
        <UMenu toggle={visible} />
      </div>
    ) : (
      <Link to="/auth">Join</Link>
    );

    return (
      <>
        <div className={`${className} left`}>
          <Link to="/">RE:* log</Link>
        </div>

        <div className={`${className} right`}>{UserMenu}</div>
      </>
    );
  },
)`
  &.left {
    left: 0;
    margin-left: ${(props) => props.theme.ROOT_OFFSET};
    ${(props) => props.theme.HEADER_STYLES}
    font-family: Montserrat Alternates;
    font-weight: 300;
    letter-spacing: 7px;
    border-bottom: 1px solid #000;
  }
  &.right {
    right: 0;
    margin-right: ${(props) => props.theme.ROOT_OFFSET};
    ${(props) => props.theme.HEADER_STYLES}
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
