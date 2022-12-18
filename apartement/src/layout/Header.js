import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  Row,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* <Row as="header"> */}
      {/* <Col> */}
      <Navbar
        // bg="success"
        variant="dark"
        style={{ backgroundColor: "#1d5046" }}
      >
        <Container>
          <NavbarBrand href="/home">Apartement Mandirian</NavbarBrand>

          <NavbarCollapse>
            <Nav>
              <Nav.Link as={Link} to="/transaksi" className="text-white">
                {" "}
                Apartement Transaction
              </Nav.Link>
              <Nav.Link as={Link} to="/unit" className="text-white">
                {" "}
                Apartement Unit
              </Nav.Link>
              <Nav.Link as={Link} to="/residence" className="text-white">
                {" "}
                Apartement Residence
              </Nav.Link>
            </Nav>
          </NavbarCollapse>
          <Button variant="light" as={Link} to="/login">
            Log Out
          </Button>
        </Container>
      </Navbar>
      {/* </Col> */}
      {/* </Row> */}
    </>
  );
}

export default Header;
