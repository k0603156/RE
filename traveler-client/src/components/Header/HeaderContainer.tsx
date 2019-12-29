import React, { useState } from "react";
import { UserState } from "store/modules/User/types";
import HeaderPresenter from "./HeaderPresenter";

const HeaderContainer = (props: { headerAuth: UserState }) => {
  const [value, setValue] = useState(false);
  const MouseEnter = () => {
    setValue(true);
  };
  const MouseLeave = () => {
    setValue(false);
  };
  return (
    <HeaderPresenter
      MouseEnter={MouseEnter}
      MouseLeave={MouseLeave}
      Toggle={value}
      Auth={props.headerAuth}
    />
  );
};

export default HeaderContainer;
