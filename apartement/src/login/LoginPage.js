import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../Store/auth-slice";
import "./Login.css";

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
      {/* <Card>
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
      </Card> */}
      <div className="wrapper d-flex align-items-center justify-content-center w-100">
        <div className="login">
          <h2 className="mb-3 text-center">Sign in</h2>
          <Form onSubmit={handleSubmit} className="needs-validation">
            <div className="form-group was-validated mb-2">
              <label className="form-label">Username</label>
              <input
                className="form-control"
                name="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <div className="invalid-feedback">Please Enter Your Username</div>
            </div>
            <div className="form-group was-validated mb-2">
              <label className="form-label">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="invalid-feedback">Please Enter Your Password</div>
            </div>
            <div className="form-group form-check mb-2">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">Remember me</label>
            </div>
            <Button type="submit" className="btn btn-success w-100 block mt-2">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
