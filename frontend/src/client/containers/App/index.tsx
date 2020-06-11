import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import {
  PrivateRoutes,
  PublicRoutes,
  SessionRoutes,
  AdminRoutes,
} from "client/components/routes";
import Theme from "client/styles/Theme";
import GlobalStyles from "client/styles/Global";
import { Header, MessageBox } from "client/components/organisms";
import { RootStateType } from "client/services/store";
import PublicLayout, {
  NotFound,
} from "client/components/layouts/publicLayouts";
import PrivateLayout from "client/components/layouts/privateLayouts";

const Wrapper = styled.div`
  position: relative;
  padding: ${(props) => `0 ${props.theme.ROOT_OFFSET}`};
  width: 100%;
  flex: 1;
  overflow-y: auto;
`;

interface IProps {
  auth: RootStateType["auth"];
  msg: RootStateType["msg"];
}
function App({ auth, msg }: IProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header auth={auth} />
      <Wrapper>
        <Switch>
          {_.map(PublicRoutes, ({ component, path }, key) => {
            return (
              <Route
                exact
                path={path}
                key={key}
                render={() =>
                  auth.isLogged ? (
                    <PrivateLayout component={component} />
                  ) : (
                    <PublicLayout component={component} />
                  )
                }
              />
            );
          })}
          {_.map(PrivateRoutes, ({ component, path }, key) => {
            return (
              <Route
                exact
                path={path}
                key={key}
                render={() =>
                  auth.isLogged ? (
                    <PrivateLayout component={component} />
                  ) : (
                    <Redirect to={SessionRoutes.Auth.path} />
                  )
                }
              />
            );
          })}

          {_.map(SessionRoutes, ({ component, path }, key) => {
            return (
              <Route
                exact
                path={path}
                key={key}
                render={() =>
                  auth.isLogged ? (
                    <Redirect to={PublicRoutes.Main.path} />
                  ) : (
                    <PublicLayout component={component} />
                  )
                }
              />
            );
          })}

          {_.map(AdminRoutes, ({ component, path }, key) => {
            return (
              <Route
                exact
                path={path}
                key={key}
                render={() =>
                  auth.isLogged && auth.isAdmin ? (
                    <PrivateLayout component={component} />
                  ) : (
                    <Redirect to={SessionRoutes.Auth.path} />
                  )
                }
              />
            );
          })}
          <Route component={NotFound} />
        </Switch>
        {msg.isAlert && <MessageBox type={msg.msgType} message={msg.message} />}
      </Wrapper>
    </ThemeProvider>
  );
}

export default connect(({ auth, msg }: RootStateType) => ({
  auth,
  msg,
}))(App);