import React, { useState } from "react";
import Presenter from "./Presenter";

const Container = (props: { auth: IAuthState }) => {
  const { auth } = props;
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
      auth={auth}
    />
  );
};

export default Container;
