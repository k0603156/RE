import React from "react";
import styled from "styled-components";
import { RootStateType } from "@Store/modules/index";
const Box = styled.div`
  margin: 3rem auto;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 320px;
  margin: auto;
`;
const Li = styled.li`
  width: 33%;
  padding: 0.5rem;
  margin: 1px 0;
  border: 1px solid gray;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    box-shadow: 0.05rem 0.05rem 0.4rem lightgray;
  }
`;
interface IProps {
  boardlist: RootStateType["base"]["boardlist"];
}

export default (props: IProps) => {
  return (
    <Box>
      <Ul>
        {props.boardlist.map((board: { id: string; name: string }) => (
          <Li key={board.id}>{board.name}</Li>
        ))}
      </Ul>
    </Box>
  );
};
