import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Input } from "../components";
import axios from "axios";

export default class Login extends Component {
  state = {
    login_username: "Clientmanager@gmail.com",
    password: "Clientmanager@gmail.com",
    errors: {},
  };
  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
    console.log(this.state.login_username, this.state.password);
  };
  submitHandler = () => {
    alert("submitted");
    axios({
      method: "post",
      url: "https://gprs-api.geopits.com/auth/login/",
      data: {
        login_username: this.state.login_username,
        method_of_login: "email_password",
        password: this.state.password,
        platform: "retail_hub",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          alert("success");
          localStorage.setItem("auth_key", response.data.sessionid);
          window.location.reload();
        } else {
          alert("unhandled");
        }
      })
      .catch((error) => {
        if (error.response.status === 400 || error.response.status === 403) {
          alert("error");
          console.log(error.response);
          this.setState({
            ...this.state,
            errors: {
              login_username: error.response.data.login_username,
              password: error.response.data.detail,
            },
          });
        }
      });
  };
  render() {
    return (
      <div className="login-container text-capitalize">
        <div className="left-container">
          <img src="https://i.imgur.com/o3FvBnt.png" />
          <h3>India's First Customized InStore Solutions</h3>
        </div>
        <div className="right-container">
          <div className="right-header">
            <h4>
              <strong>Retail Hub</strong>
            </h4>
            <small className="text-muted">Retailscan</small>
            <p className="pt-5 text-muted">Please Login to your account</p>
          </div>
          <div className="right-form">
            <Input
              value={this.state.login_username}
              name="login_username"
              type="email"
              placeholder="Enter Email"
              change={(e) => {
                this.handleChange(e);
              }}
              error={this.state.errors.login_username}
            />
            <Input
              value={this.state.password}
              name="password"
              type="password"
              placeholder="Enter Password"
              change={(e) => {
                this.handleChange(e);
              }}
              error={this.state.errors.password}
            />

            <Button
              variant="primary"
              className="mt-5"
              onClick={this.submitHandler}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
