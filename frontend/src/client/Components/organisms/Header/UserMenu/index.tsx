import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { authLogoutAction } from "@Store/modules/Auth/actions";
import PrivateRoutes from "@Client/Routes/routes.private";
import { RootStateType } from "store/modules";

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
  auth: RootStateType["auth"];
  authLogoutAction: typeof authLogoutAction;
}) => {
  return (
    <Box {...props}>
      <Item>
        <Link to={`/user/${props.auth.me.userName}`}> Profile</Link>
      </Item>
      <Item>
        <Link to={`/postedit`}> PostEdit</Link>
      </Item>
      {props.auth.isAdmin && (
        <Item>
          <Link to={"/adm"}>Admin</Link>
        </Item>
      )}
      <Item onClick={() => props.authLogoutAction(props.auth.me.email)}>
        Logout
      </Item>
    </Box>
  );
};
export default connect(
  ({ auth }: RootStateType) => ({
    auth
  }),
  { authLogoutAction }
)(UserMenu);
