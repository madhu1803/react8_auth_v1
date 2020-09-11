import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Login, Dashboard, Page404 } from "./pages";
import { AuthenticatedRoute, NonAuthenticatedRoute } from "./helpers/routes";
import axios from "axios";
export default class App extends Component {
  componentDidMount() {
    axios({
      method: "get",
      url: "https://gprs-api.geopits.com/auth/info/",
      headers: {
        Authorization: `sessionid ${localStorage.getItem("auth_key")}`,
      },
    }).catch((error) => {
      if (error.response.status === 401) {
        localStorage.removeItem("auth_key");
        // window.location.replace("/login");
        // window.location.href = "/login";
        // window.location.reload();
      }
    });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <NonAuthenticatedRoute path="/login" component={Login} />
          <AuthenticatedRoute path="/dashboard" component={Dashboard} />
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}
