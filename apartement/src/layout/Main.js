import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Main() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Row>
        <Col className="">
          <div style={{ backgroundColor: "#8ac9bd" }} className="text-center">
            <h4>Join Us!</h4>
          </div>
        </Col>
      </Row>
      <Row md="1" sm="2" className="mt-5">
        <Col>
          <Card className="text-white">
            <Card.Header
              className="d-flex justify-content-center align-item-center"
              style={{ backgroundColor: "#1d5046" }}
            >
              Apartement Unit
            </Card.Header>
            <Card.Body
              style={{ backgroundColor: "#8ac9bd" }}
              className="text-dark"
            >
              <p>Status: </p>
              <p>Unit: </p>
            </Card.Body>
            <Button
              className="d-flex justify-content-center align-item-center text-white"
              variant="ligth"
              as={Link}
              to="/unit"
              style={{ backgroundColor: "#1d5046" }}
            >
              more info
            </Button>
          </Card>

          <Card className="mt-5 text-white">
            <Card.Header
              className="d-flex justify-content-center align-item-center"
              style={{ backgroundColor: "#1d5046" }}
            >
              Apartement Residence
            </Card.Header>
            <Card.Body
              style={{ backgroundColor: "#8ac9bd" }}
              className="text-dark"
            >
              <p>Name: </p>
              <p>Address: </p>
            </Card.Body>
            <Button
              className="d-flex justify-content-center align-item-center text-white"
              variant="ligth"
              as={Link}
              to="/residence"
              style={{ backgroundColor: "#1d5046" }}
            >
              more info
            </Button>
          </Card>
        </Col>
      </Row>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Main;
