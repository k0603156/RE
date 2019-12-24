import React from "react";
import _ from "lodash";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoutes, PublicRoutes, SessionRoutes } from "routes";
import styled, { ThemeProvider } from "styled-components";
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
    isLogged: true
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
          </Switch>
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
