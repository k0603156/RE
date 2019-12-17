import React from "react";
import _ from "lodash";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoutes, PublicRoutes, SessionRoutes } from "routes";
import PrivateLayout from "./privateLayout";
import PublicLayout from "./publicLayout";
import { user } from "types/type";
function App() {
  const user: user = {
    userName: "kimyongkuk",
    isLogged: true
  };
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
