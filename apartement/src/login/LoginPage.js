import { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login, loginUser } from "../Store/auth-slice";

export default function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({ username: username, password: password }));
  };
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>Login</Card.Title>
        </Card.Header>

        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" as={Row}>
              <Form.Label column sm="3">
                Username
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  name="username"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3" as={Row}>
              <Form.Label column sm="3">
                Password
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Row>
              <Col sm="9" className="offset-sm-3">
                <Button type="submit" variant="success" size="sm">
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
