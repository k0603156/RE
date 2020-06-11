import React from "react";
import { connect } from "react-redux";
import { RootStateType } from "client/configureStore";

//todo 나중에 사용 할 때 수정

export interface IProps {
  loading: RootStateType["loading"];
  type: string;
}

function Loading({ loading, type }: IProps) {
  return loading[type] ? <div>loading...</div> : null;
}

export default connect(({ loading }: RootStateType) => ({
  loading,
}))(Loading);
