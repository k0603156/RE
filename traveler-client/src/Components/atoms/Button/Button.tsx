import React from "react";
import styled from "styled-components";
interface ISimpleProps {
  className?: any;
  children: any;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  style?: "default" | "wide";
}
const SimpleBtn = styled.button`
  outline: 0;
  border: 0;
  color: ${props => props.theme.blackColor};
  padding: 0px 7px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
`;
const WideBtn = styled(SimpleBtn)`
  width: 100%;
  border: 0;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  background-color: ${props => props.theme.blackColor};
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
  margin: 5px 0;
  cursor: pointer;
`;
const Button = ({
  className,
  children,
  onClick,
  type,
  style
}: ISimpleProps) => {
  switch (style) {
    case "wide":
      return (
        <WideBtn className={className} onClick={onClick} type={type}>
          {children}
        </WideBtn>
      );
      break;
    default:
      return (
        <SimpleBtn className={className} onClick={onClick} type={type}>
          {children}
        </SimpleBtn>
      );
  }
};

export default Button;
