import React from "react";
import { Card } from "react-bootstrap";
import { IoLogoXbox } from "react-icons/io";
export default function Dcard(props) {
  let { project } = props;
  return (
    <Card className="card-component shadow p-1 mb-4 bg-white rounded text-capitalize">
      <Card.Body>
        <IoLogoXbox className="mb-5" style={{ fontSize: "30px" }} />
        <Card.Title>{project.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-primary">
          {project.type}
        </Card.Subtitle>
        <hr />
        <span className="text-muted">No.of outlets</span>
        <Card.Text>
          <strong>{project.outlets_count}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
