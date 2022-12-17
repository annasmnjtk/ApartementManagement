import { Button, Card, CardGroup, Col, Image, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
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
          <Card style={{ backgroundColor: "#1d5046" }} className="text-white">
            <Card.Header className="d-flex justify-content-center align-item-center">
              Apartement Unit
            </Card.Header>
            <Card.Body>
              <p>Status: </p>
              <p>Unit: </p>
            </Card.Body>
            <Button
              className="d-flex justify-content-center align-item-center text-white"
              variant="ligth"
            >
              more info
            </Button>
          </Card>
          <Card
            className="mt-5 text-white"
            style={{ backgroundColor: "#1d5046" }}
          >
            <Card.Header className="d-flex justify-content-center align-item-center">
              Apartement Residence
            </Card.Header>
            <Card.Body>
              <p>Name: </p>
              <p>Address: </p>
            </Card.Body>
            <Button
              className="d-flex justify-content-center align-item-center text-white"
              variant="ligth"
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
