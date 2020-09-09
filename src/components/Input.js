import React, { Component } from "react";
import { Form } from "react-bootstrap";
export default class Input extends Component {
  render() {
    let { type, name, value, error = null, placeholder, change } = this.props;
    return (
      <Form.Group>
        <Form.Control
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={change}
        />
        {error && <p className="text-danger">{error}</p>}
      </Form.Group>
    );
  }
}
