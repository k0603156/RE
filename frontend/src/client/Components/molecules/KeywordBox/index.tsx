import React from "react";
import styled from "styled-components";
import { RootStateType } from "@Store/modules/index";
import { boardSelectAction } from "@Store/modules/Main/actions";
import List from "@Client/Components/atoms/List";

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
  border: 1px solid gray;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    box-shadow: 0.05rem 0.05rem 0.4rem lightgray;
  }
`;
interface IProps {
  boardSelectAction: typeof boardSelectAction;
  boardlist: RootStateType["main"]["boardlist"];
}

export default (props: IProps) => {
  const onClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    props.boardSelectAction(parseInt(e.currentTarget.dataset.keyid!));
  };

  return (
    <Box>
      <List<RootStateType["main"]["boardlist"]>
        wrapper={Ul}
        dataList={props.boardlist}
        temp={(data) => (
          <Li key={data.id} data-keyid={data.id} onClick={onClick}>
            {data.name}
          </Li>
        )}
      />
    </Box>
  );
};
