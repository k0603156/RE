import React from "react";
import { connect } from "react-redux";
import { set_content } from "Store/modules/Post/actions";

import WritePresenter from "./WritePresenter";
import useInput from "Hooks/useInput";

const WriteContainer = (props: { post: any }) => {
  const MaxContents = 5;
  const title = useInput<string>("");
  const country = useInput<string>("");
  const fromDate = useInput<string>("");
  const toDate = useInput<string>("");
  const subTitle = useInput<string>("");
  const contentsArr = [
    {
      title: useInput<string>(""),
      date: useInput<string>(""),
      body: useInput<string>(""),
      toDate: useInput<string>(""),
      image: useInput<string>("")
    }
  ];
  const onSubmit = async (e: any) => {
    e.preventDefault();
  };
  return (
    <WritePresenter
      title={title}
      country={country}
      fromDate={fromDate}
      toDate={toDate}
      subTitle={subTitle}
      onSubmit={onSubmit}
      contentsArr={contentsArr}
    />
  );
};

export default connect(
  ({ post, loading }: RootStateType) => ({
    post
  }),
  { set_content }
)(WriteContainer);
