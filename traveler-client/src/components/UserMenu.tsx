import React from "react";
import styled from "styled-components";
interface IBox {
  toggle: boolean;
}
const Item = styled.li`
  margin: 10px 0;
  text-align: right;
`;
const Box = styled.ul`
  min-width: 100px;
  display: ${({ toggle }: IBox) => (toggle ? "block" : "none")};
`;

const UserMenu = (props: { toggle: boolean }) => (
  <Box {...props}>
    <Item>글쓰기</Item>
    <Item>정보수정</Item>
    <Item>로그아웃</Item>
  </Box>
);

export default UserMenu;
