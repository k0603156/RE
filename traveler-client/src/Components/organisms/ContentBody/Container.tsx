import React from "react";
import Presenter from "./Presenter";

const Container = (props: { nthDate: number; data: any; onChange: any }) => {
  return (
    <Presenter
      nthDate={props.nthDate}
      data={props.data}
      onChange={props.onChange}
    />
  );
};

export default Container;
