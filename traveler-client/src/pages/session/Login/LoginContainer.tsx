import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import LoginPresenter from "./LoginPresenter";
interface IProps extends RouteComponentProps<any> {}
interface IState {}
class LoginContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const { location: { state = {} } = {} } = props;
    this.state = {};
  }
  public render() {
    return <LoginPresenter></LoginPresenter>;
  }
}

export default LoginContainer;
