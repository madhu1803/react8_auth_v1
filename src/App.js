import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Dashboard } from "./pages";
import { AuthenticatedRoute, NonAuthenticatedRoute } from "./helpers/routes";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <NonAuthenticatedRoute path="/login" component={Login} />
          <AuthenticatedRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}
