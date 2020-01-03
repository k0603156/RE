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
}) => (
  <Box {...props}>
    <Item>
      <Link to="/user">MyPage</Link>
    </Item>
    <Item>
      <Link to="/post">Posting</Link>
    </Item>
    <Item onClick={() => props.logout(props.auth.user.email)}>Logout</Item>
  </Box>
);
export default connect(
  ({ auth }: RootStateType) => ({
    auth
  }),
  { logout }
)(UserMenu);
