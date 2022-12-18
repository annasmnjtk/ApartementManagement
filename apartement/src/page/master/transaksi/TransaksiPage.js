import { Button, Col, Row } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../../../layout/Header";
export default function TransaksiPage() {
  return (
    <>
      <Header></Header>
      <Row>
        <Col sm="12" className="mb-3">
          <Button as={Link} to="form">
            Add Transaksi
          </Button>
          <Button as={Link} to="">
            List Transkasi
          </Button>
        </Col>
        <Col>
          <Outlet></Outlet>
        </Col>
      </Row>
    </>
  );
}
