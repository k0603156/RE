import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Theme from "Styles/Theme";
import GlobalStyles from "Styles/Global";
import PrivateLayout from "./privateLayout";
import PublicLayout from "./publicLayout";
import NotFound from "./publicLayout/NotFound";
import {
  PrivateRoutes,
  PublicRoutes,
  SessionRoutes,
  AdminRoutes
} from "Routes";
import { Header } from "Components/organisms";

const Wrapper = styled.div`
  position: relative;
  padding: 0 10vw;
  width: 100%;
  flex: 1;
  overflow-y: auto;
`;
const MSGBox = styled.div`
  position: fixed;
  bottom: 5px;
  right: 3px;
  height: 40px;
  width: auto;
  line-height: 30px;
  padding: 5px 10px;
  color: white;
  font-weight: 800;
  border-radius: 3px;
  box-shadow: 1px 1px 4px gray;
  background-color: ${props =>
    props.id === "ERROR" ? "rgba(100, 0, 0, 0.5)" : "rgba(0, 100, 0, 0.5)"};
`;

function App(props: { auth: IAuthState; msg: IMsgState }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {/* <BrowserRouter> */}
      <Header auth={props.auth} />
      <Wrapper>
        <Switch>
          {_.map(PublicRoutes, (route, key) => {
            const { component, path } = route;
            return (
              <Route
                exact
                path={path}
                key={key}
                render={route =>
                  props.auth.isLogged ? (
                    <PrivateLayout component={component} />
                  ) : (
                    <PublicLayout component={component} />
                  )
                }
              />
            );
          })}
          {_.map(PrivateRoutes, (route, key) => {
            const { component, path } = route;
            return (
              <Route
                exact
                path={path}
                key={key}
                render={route =>
                  props.auth.isLogged ? (
                    <PrivateLayout component={component} />
                  ) : (
                    <Redirect to={SessionRoutes.Auth.path} />
                  )
                }
              />
            );
          })}

          {_.map(SessionRoutes, (route, key) => {
            const { component, path } = route;
            return (
              <Route
                exact
                path={path}
                key={key}
                render={route =>
                  props.auth.isLogged ? (
                    <Redirect to={PublicRoutes.Main.path} />
                  ) : (
                    <PublicLayout component={component} />
                  )
                }
              />
            );
          })}

          {_.map(AdminRoutes, (route, key) => {
            const { component, path } = route;
            return (
              <Route
                exact
                path={path}
                key={key}
                render={route =>
                  props.auth.isLogged && props.auth.isAdmin ? (
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
        {props.msg.isAlert && (
          <MSGBox id={props.msg.msgType}>{props.msg.message}</MSGBox>
        )}
      </Wrapper>
      {/* </BrowserRouter> */}
    </ThemeProvider>
  );
}

export default connect(({ auth, msg }: RootStateType) => ({
  auth,
  msg
}))(App);
