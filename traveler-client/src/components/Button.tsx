import React from "react";
import styled from "styled-components";

interface ISimpleProps {
  text: string;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}
interface INormalProps extends ISimpleProps {
  type?: "button" | "submit" | "reset" | undefined;
}

const SimpleBtn = styled.span`
  color: ${props => props.theme.blackColor};
  padding: 0px 7px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
`;
const SimpleButton = ({ text, onClick }: ISimpleProps) => (
  <SimpleBtn onClick={onClick}>{text}</SimpleBtn>
);

const NormalBtn = styled.button`
  width: 100%;
  border: 0;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  background-color: ${props => props.theme.blackColor};
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
  cursor: pointer;
`;

const NormalButton = ({ text, onClick, type }: INormalProps) => (
  <NormalBtn onClick={onClick} type={type}>
    {text}
  </NormalBtn>
);

export { NormalButton, SimpleButton };
