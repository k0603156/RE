import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import LoginPresenter from "./LoginPresenter";
interface IProps {}
interface IState {}
class LoginContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  public render() {
    return <LoginPresenter />;
  }
}

export default LoginContainer;
