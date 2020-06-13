/*eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RootStateType } from "client/configureStore";

interface IProps {
  auth: RootStateType["auth"];
  onSignout: () => void;
}
const Item = styled.li`
  margin: 10px 0;
  text-align: right;
`;
const Box = styled.ul`
  min-width: 100px;
`;

const HeaderMenu = ({ auth, onSignout }: IProps) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div onClick={toggleVisible} onKeyUp={() => {}} role="button" tabIndex={0}>
      {auth.me.userName}
      {visible && (
        <Box>
          <Item>
            <Link to={`/profile/${auth.me.userName}`}> Profile</Link>
          </Item>
          <Item>
            <Link to="/postedit"> PostEdit</Link>
          </Item>
          {auth.isAdmin && (
            <Item>
              <Link to="/adm">Admin</Link>
            </Item>
          )}
          <Item onClick={onSignout}>Logout</Item>
        </Box>
      )}
    </div>
  );
};
export default HeaderMenu;
