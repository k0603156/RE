import React from "react";
import styled from "styled-components";
interface ISimpleProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: any;
  children: any;
  type?: "button" | "submit" | "reset";
  custom?: "default" | "wide";
}
const SimpleBtn = styled.button`
  outline: 0;
  border: 0;
  color: ${props => props.theme.blackColor};
  background-color: #fff;
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
  type = "button",
  custom,
  ...others
}: ISimpleProps) => {
  switch (custom) {
    case "wide":
      return (
        <WideBtn className={className} type={type} {...others}>
          {children}
        </WideBtn>
      );
    default:
      return (
        <SimpleBtn className={className} type={type} {...others}>
          {children}
        </SimpleBtn>
      );
  }
};

export default Button;
