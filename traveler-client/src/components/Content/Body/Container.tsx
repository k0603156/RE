import React from "react";
import Presenter from "./Presenter";

const Container = (props: { data: any; nthDate: number; onChange: any }) => {
  return (
    <Presenter
      data={props.data}
      nthDate={props.nthDate}
      onChange={props.onChange}
    />
  );
};

export default Container;
