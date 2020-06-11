import React, { useState } from "react";
import { RootStateType } from "client/configureStore";
import Presenter from "./Presenter";

interface IProps {
  auth: RootStateType["auth"];
}
export default ({ auth }: IProps) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <Presenter toggleVisible={toggleVisible} visible={visible} auth={auth} />
  );
};
