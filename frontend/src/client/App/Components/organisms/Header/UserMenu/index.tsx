import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import PrivateRoutes from "@Client/App/Routes/routes.private";
import { RootStateType } from "@Services/Store/modules";
import { authSignoutAction } from "@Services/Store/modules/Auth/actions";

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
  authSignoutAction: typeof authSignoutAction;
}) => {
  return (
    <Box {...props}>
      <Item>
        <Link to={`/profile/${props.auth.me.userName}`}> Profile</Link>
      </Item>
      <Item>
        <Link to={`/postedit`}> PostEdit</Link>
      </Item>
      {props.auth.isAdmin && (
        <Item>
          <Link to={"/adm"}>Admin</Link>
        </Item>
      )}
      <Item onClick={() => props.authSignoutAction(props.auth.me.email)}>
        Logout
      </Item>
    </Box>
  );
};
export default connect(
  ({ auth }: RootStateType) => ({
    auth,
  }),
  { authSignoutAction }
)(UserMenu);
