import React, { Component } from "react";

export default class Login extends Component {
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
        </div>
      </div>
    );
  }
}
