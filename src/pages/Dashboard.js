import React, { Component } from "react";
import axios from "axios";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import Dcard from "../components/Dcard";
export default class Dashboard extends Component {
  state = {
    projects: [],
  };
  componentDidMount() {
    axios({
      method: "get",
      url: "https://gprs-api.geopits.com/project/projects/",
      headers: {
        Authorization: `sessionid ${localStorage.getItem("auth_key")}`,
      },
    })
      .then((response) => {
        this.setState({
          ...this.state,
          projects: response.data.results,
        });
        console.log(this.state.projects);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="text-captalize dashboard-container">
        {/* dashboard header */}
        <div className="dashboard-header mb-5">
          <p>Dashboard/projects</p>
          <p>
            <strong>List of projects</strong>
          </p>
          <p>
            <strong>Welcome to test client </strong>
            {/* dashboard input group */}
            <InputGroup className="dashboard-input-group">
              <FormControl placeholder="Type Something Here" />
              <InputGroup.Append>
                <Button variant="outline-secondary">Button</Button>
                <Button variant="outline-secondary">Button</Button>
              </InputGroup.Append>
            </InputGroup>
          </p>
        </div>
        {/* card */}
        <div className="row">
          {this.state.projects.map((project) => (
            <div className="col-lg-3">
              <Dcard project={project} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
