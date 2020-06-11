import React from "react";
import { connect } from "react-redux";
import { RootStateType } from "client/services/store";
import { MessageBox } from "client/components/organisms";

export interface IProps {
  msg: RootStateType["msg"];
}

function Message({ msg }: IProps) {
  return msg.isAlert ? (
    <MessageBox type={msg.msgType} message={msg.message} />
  ) : null;
}

export default connect(({ msg }: RootStateType) => ({
  msg,
}))(Message);
