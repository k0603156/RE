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
import { user } from "types/type";
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;
function App() {
  const user: user = {
    userName: "kimyongkuk",
    isLogged: false
  };
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <BrowserRouter>
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
                    user.isLogged ? (
                      <PrivateLayout
                        component={component}
                        route={route}
                        user={user}
                      />
                    ) : (
                      <PublicLayout
                        component={component}
                        route={route}
                        user={user}
                      />
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
                    user.isLogged ? (
                      <PrivateLayout
                        component={component}
                        route={route}
                        user={user}
                      />
                    ) : (
                      <Redirect to={SessionRoutes.Login.path} />
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
                    user.isLogged ? (
                      <Redirect to={PublicRoutes.Main.path} />
                    ) : (
                      <PublicLayout
                        component={component}
                        route={route}
                        user={user}
                      />
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

export default App;
