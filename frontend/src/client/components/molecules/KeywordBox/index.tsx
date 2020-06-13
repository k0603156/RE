import React from "react";
import styled from "styled-components";
import List from "client/components/atoms/List";
import { RootStateType } from "client/configureStore";

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
  boards: RootStateType["main"]["boards"];
  onClickKeyword: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

export default ({ boards, onClickKeyword }: IProps) => {
  return (
    <Box>
      <List<RootStateType["main"]["boards"]>
        wrapper={Ul}
        dataList={boards}
        temp={(data) => (
          <Li key={data.id} data-keyid={data.id} onClick={onClickKeyword}>
            {data.name}
          </Li>
        )}
      />
    </Box>
  );
};
