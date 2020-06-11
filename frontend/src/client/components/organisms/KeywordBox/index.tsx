import React from "react";
import styled from "styled-components";
import List from "client/components/atoms/List";
import { RootStateType } from "client/services/store";
import { boardSelectAction } from "client/containers/Pages/public/Main/actions";

const Box = styled.div`
  margin: 1rem auto;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 640px;
  margin: auto;
`;
const Li = styled.li`
  width: 33%;
  padding: 0.5rem;
  margin: 1px 0;
  border: 1px solid rgba(47, 44, 55, 0.1);
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(47, 44, 55, 0.5);
  transition: transform 0.3s ease 0s;
  &:hover {
    box-shadow: 1px 1px 8px rgba(47, 44, 55, 0.1);
  }
`;
interface IProps {
  boardSelectAction: typeof boardSelectAction;
  boardlist: RootStateType["main"]["boardlist"];
}

export default ({ boardSelectAction, boardlist }: IProps) => {
  const onClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    boardSelectAction(Number(e.currentTarget.dataset.keyid!));
  };

  return (
    <Box>
      <List<RootStateType["main"]["boardlist"]>
        wrapper={Ul}
        dataList={boardlist}
        temp={(data) => (
          <Li key={data.id} data-keyid={data.id} onClick={onClick}>
            {data.name}
          </Li>
        )}
      />
    </Box>
  );
};
