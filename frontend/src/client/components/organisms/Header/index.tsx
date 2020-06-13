import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RootStateType } from "client/configureStore";
import { maxWidth } from "client/styles/DeviceBreakpoints";

import { authSignoutAction } from "client/containers/Pages/session/Auth/actions";
import { HeaderMenu } from "client/components/molecules";

interface IProps {
  className?: string;
  auth: RootStateType["auth"];
  authSignoutAction: typeof authSignoutAction;
}

const Header = styled(({ className, auth, authSignoutAction }: IProps) => {
  const onSignout = () => authSignoutAction(auth.me.email);
  return (
    <>
      <div className={`${className} left`}>
        <Link to="/">RE:* log</Link>
      </div>
      <div className={`${className} right`}>
        {auth.isLogged ? (
          <HeaderMenu auth={auth} onSignout={onSignout} />
        ) : (
          <Link to="/auth">Join</Link>
        )}
      </div>
    </>
  );
})`
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
export default connect((state: RootStateType) => ({}), { authSignoutAction })(
  Header,
);
