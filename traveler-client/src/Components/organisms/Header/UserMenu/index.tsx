import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { logout } from "Store/modules/Auth/actions";
import PrivateRoutes from "Routes/routes.private";

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
  auth: any;
  logout: ActionLogoutType;
}) => {
  const { userName, email } = props.auth.me;
  return (
    <Box {...props}>
      {Object.entries(PrivateRoutes).map(([page, value]) => {
        if (value.path === "/user/:userName") {
          value.path = `/user/${userName}`;
        }
        return (
          <Item key={value.path}>
            <Link to={value.path}>{page}</Link>
          </Item>
        );
      })}
      {props.auth.isAdmin && (
        <Item>
          <Link to={"/adm"}>Admin</Link>
        </Item>
      )}
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
