import React from "react";
import WritePresenter from "./WritePresenter";
import useInput from "Hooks/useInput";
const WriteContainer = () => {
  const title = useInput("");
  const country = useInput("");
  const fromDate = useInput("");
  const toDate = useInput("");
  const subTitle = useInput("");
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
    />
  );
};

export default WriteContainer;
