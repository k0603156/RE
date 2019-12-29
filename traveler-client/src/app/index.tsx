import React from "react";
import _ from "lodash";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoutes, PublicRoutes, SessionRoutes } from "routes";
import NotFound from "./publicLayout/NotFound";
import PrivateLayout from "./privateLayout";
import PublicLayout from "./publicLayout";
import GlobalStyles from "styles/Global";
import Theme from "styles/Theme";
import { connect } from "react-redux";
import { rootState } from "store/modules";
import { UserState } from "store/modules/User/types";
import Header from "components/Header";
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  overflow: auto;
`;
function App(props: { auth: UserState }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header headerAuth={props.auth} />
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
            <Route component={NotFound} />
          </Switch>
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const mapStateProps = (rootStates: rootState) => ({
  auth: rootStates.userReducer
});
export default connect(mapStateProps)(App);
