import React, { useState } from "react";
import Presenter from "./Presenter";
import { RootStateType } from "@Services/Store/modules";

interface IProps {
  auth: RootStateType["auth"];
}
export default (props: IProps) => {
  const [value, setValue] = useState(false);
  const MouseEnter = () => {
    setValue(true);
  };
  const MouseLeave = () => {
    setValue(false);
  };
  return (
    <Presenter
      onMouseEnter={MouseEnter}
      onMouseLeave={MouseLeave}
      toggle={value}
      auth={props.auth}
    />
  );
};
