import React from "react";
import _ from "lodash";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "Styles/Global";
import Theme from "Styles/Theme";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {
  PrivateRoutes,
  PublicRoutes,
  SessionRoutes,
  AdminRoutes
} from "Routes";
import NotFound from "./publicLayout/NotFound";
import PrivateLayout from "./privateLayout";
import PublicLayout from "./publicLayout";
import { connect } from "react-redux";
import { Header } from "Components/organisms";

const Wrapper = styled.div`
  position: relative;
  padding: 0 10vw;
  width: 100%;
  flex: 1;
  overflow-y: auto;
`;
function App(props: { auth: IAuthState }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <BrowserRouter>
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
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default connect(({ auth }: RootStateType) => ({
  auth
}))(App);
