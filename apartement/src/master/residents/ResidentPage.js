import { useState } from "react";
import { RESIDENT_PAGE } from "./resident-model";
import ResidentForm from "./ResidentForm";
import ResidentTable from "./ResidentTable";
import { Button, Card, Col, Row } from "react-bootstrap";

export default function ResidentPage(props) {
  const [page, setPage] = useState(RESIDENT_PAGE.LIST);
  return (
    <Row className="d-flex justify-content-center align-items-center vh-100">
      <Col sm="8">
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <Card.Title as="h1" className="fs-5">
              Resident
            </Card.Title>
            {page === RESIDENT_PAGE.LIST && (
              <Button
                size="sm"
                variant="dark"
                onClick={() => setPage(RESIDENT_PAGE.FORM)}
              >
                Add Resident
              </Button>
            )}
            {page === RESIDENT_PAGE.FORM && (
              <Button
                size="sm"
                variant="dark"
                onClick={() => setPage(RESIDENT_PAGE.LIST)}
              >
                Return
              </Button>
            )}
          </Card.Header>
          <Card.Body>
            {page === RESIDENT_PAGE.LIST ? (
              <ResidentTable setPage={setPage} />
            ) : (
              <ResidentForm setPage={setPage} />
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
