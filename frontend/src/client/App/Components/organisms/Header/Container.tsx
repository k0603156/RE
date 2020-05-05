import React, { useState } from "react";
import Presenter from "./Presenter";
import { RootStateType } from "@Services/Store/modules";

interface IProps {
  auth: RootStateType["auth"];
}
export default (props: IProps) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <Presenter
      toggleVisible={toggleVisible}
      visible={visible}
      auth={props.auth}
    />
  );
};
