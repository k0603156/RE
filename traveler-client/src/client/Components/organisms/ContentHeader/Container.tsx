import React from "react";
import Presenter from "./Presenter";

const Container = (props: { data: any; onChange: any }) => {
  return <Presenter data={props.data.header} onChange={props.onChange} />;
};

export default Container;
