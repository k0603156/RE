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
} from "@Client/App/Routes";
import Theme from "@Client/Styles/Theme";
import GlobalStyles from "@Client/Styles/Global";
import { Header } from "@Client/App/Components/organisms";
import { RootStateType } from "@Services/Store/modules";
import PublicLayout, { NotFound } from "./Layouts/publicLayout";
import PrivateLayout from "./Layouts/privateLayout";

const Wrapper = styled.div`
  position: relative;
  padding: ${(props) => `0 ${props.theme.rootSideOffset}`};
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
  background-color: ${(props) =>
    props.id === "ERROR" ? "rgba(100, 0, 0, 0.5)" : "rgba(0, 100, 0, 0.5)"};
`;
interface IProps {
  auth: RootStateType["auth"];
  msg: RootStateType["msg"];
}
function App({ auth, msg }: IProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {/* <BrowserRouter> */}
      <Header auth={auth} />
      <Wrapper>
        <Switch>
          {_.map(PublicRoutes, (route, key) => {
            const { component, path } = route;
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
          {_.map(PrivateRoutes, (route, key) => {
            const { component, path } = route;
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

          {_.map(SessionRoutes, (route, key) => {
            const { component, path } = route;
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

          {_.map(AdminRoutes, (route, key) => {
            const { component, path } = route;
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
        {msg.isAlert && <MSGBox id={msg.msgType}>{msg.message}</MSGBox>}
      </Wrapper>
      {/* </BrowserRouter> */}
    </ThemeProvider>
  );
}

export default connect(({ auth, msg }: RootStateType) => ({
  auth,
  msg,
}))(App);
