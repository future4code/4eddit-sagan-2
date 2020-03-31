import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage/index";
import Feed from "../Feed/index";
import Register from "../Register/Register";

export const routes = {
  root: "/",
  login: "/login",
  cadastro:"/register"
  
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={Feed} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.cadastro} component={Register} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
