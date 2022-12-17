import { useEffect, useState } from "react";
import { Card, Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import userSlice, { login, loginUser } from "../../Store/auth-slice";
import "./login.css";

export default function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { token, error } = useSelector((store) => store[userSlice.name]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({ username: username, password: password }));
  };
  useEffect(() => {
    if (token !== undefined) {
      navigate("/home");
    }
  }, [navigate, token]);

  return (
    <>
      <div className="wrapper d-flex align-items-center justify-content-center w-100">
        <div className="login">
          <h2 className="mb-3 text-center">Sign in</h2>
          <Form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label className="form-label">Username</label>
              <input
                className="form-control"
                name="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-2">
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
