import React, { useState } from "react";
import HeaderPresenter from "./HeaderPresenter";

const HeaderContainer = (props: { auth: IAuthState }) => {
  const { auth } = props;
  const [value, setValue] = useState(false);
  const MouseEnter = () => {
    setValue(true);
  };
  const MouseLeave = () => {
    setValue(false);
  };
  return (
    <HeaderPresenter
      onMouseEnter={MouseEnter}
      onMouseLeave={MouseLeave}
      toggle={value}
      auth={auth}
    />
  );
};

export default HeaderContainer;
