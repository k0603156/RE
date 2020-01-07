import React from "react";
import ContentPresenter from "./ContentPresenter";

const ContentContainer = (props: {
  data: {
    title: IUseInputReturn<string>;
    date: IUseInputReturn<string>;
    body: IUseInputReturn<string>;
    toDate: IUseInputReturn<string>;
    image: IUseInputReturn<string>;
  };
}) => {
  return <ContentPresenter data={props.data} />;
};

export default ContentContainer;
