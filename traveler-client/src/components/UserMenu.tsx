import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { logout } from "Store/modules/Auth/actions";
const Item = styled.li`
  margin: 10px 0;
  text-align: right;
`;
const Box = styled.ul`
  min-width: 100px;
  display: ${(props: { toggle: boolean }) => (props.toggle ? "block" : "none")};
`;

const UserMenu = (props: {
  toggle: boolean;
  auth: IAuthState;
  logout: ActionLogoutType;
}) => {
  const { userName, email } = props.auth.me;
  return (
    <Box {...props}>
      <Item>
        <Link to={`/user/${userName}`}>MyPage</Link>
      </Item>
      <Item>
        <Link to="/write">Posting</Link>
      </Item>
      <Item onClick={() => props.logout(email)}>Logout</Item>
    </Box>
  );
};
export default connect(
  ({ auth }: RootStateType) => ({
    auth
  }),
  { logout }
)(UserMenu);
