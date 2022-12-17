import { useState } from "react";
import { RESIDENT_PAGE } from "./resident-model";
import ResidentForm from "./ResidentForm";
import ResidentTable from "./ResidentTable";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function ResidentPage(props) {
  const navigate = useNavigate();
  return (
    <Row className="d-flex justify-content-center align-items-center vh-100">
      <Col sm="8">
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <Card.Title as="h1" className="fs-5">
              Resident
            </Card.Title>
            <Button as={Link} size="sm" variant="dark" to="form">
              Add Resident
            </Button>
          </Card.Header>
          <Card.Body>
            <Outlet></Outlet>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
