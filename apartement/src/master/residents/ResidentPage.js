import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";

import residentSlice, {
  selectedResident,
} from "../../Store/master-residents-slice";

export default function ResidentPage(props) {
  const navigate = useNavigate();
  const { selectedResident } = useSelector(
    (store) => store[residentSlice.name]
  );
  return (
    <>
      <Header></Header>
      <Row className="d-flex justify-content-center align-items-center vh-100">
        <Col sm="8">
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title as="h1" className="fs-5">
                Resident
              </Card.Title>
              {selectedResident ? (
                <Button as={Link} size="sm" variant="dark" to="">
                  Return
                </Button>
              ) : (
                <Button as={Link} size="sm" variant="dark" to="form">
                  Add Resident
                </Button>
              )}
            </Card.Header>
            <Card.Body>
              <Outlet></Outlet>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
