import { useEffect, useRef, useState } from "react";
import { Card, Col, Form, Row, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchResidents } from "../../../Store/master-residents-slice";
import { getAllUnit } from "../../../Store/master-units-slice";
import { saveTransaksi } from "../../../Store/transaksi-slice";
import Transaction from "./transaksi-model";

export default function TransaksiForm() {
  const dispatch = useDispatch();
  const loading = useRef(true);
  const [residents, setResidents] = useState();
  const [units, setUnits] = useState();
  const [form, setForm] = useState(new Transaction());
  const navigate = useNavigate();

  useEffect(() => {
    if (loading.current) {
      dispatch(fetchResidents()).then((res) => {
        setResidents(res.payload);
      });
      dispatch(getAllUnit()).then((res) => {
        setUnits(res.payload);
      });
      loading.current = false;
    }
  }, []);

  const onValueChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(saveTransaksi(form));
    navigate("/transaksi");
  };

  return (
    <Card>
      {loading.current && (
        <tr>
          <td colSpan={9} className="text-center text-info fw-bold">
            <Spinner animation="border" variant="info" size="sm" as="span" />
            Loading...
          </td>
        </tr>
      )}
      {units && residents && !loading.current && (
        <>
          <Card.Header>
            <Card.Title as="h2">Transaction Form</Card.Title>
          </Card.Header>
          <Form onSubmit={onSubmit}>
            <Card.Body>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column md="3">
                  ID Unit
                </Form.Label>
                <Col md="9">
                  <Form.Select
                    name="unitId"
                    value={form.unitId}
                    onChange={onValueChange}
                  >
                    <option>Select Unit</option>
                    {units.map((unit) => (
                      <option value={unit.unitCode}>{unit.unitCode}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column md="3">
                  Resident
                </Form.Label>
                <Col md="9">
                  <Form.Select
                    name="residentId"
                    value={form.residentId}
                    onChange={onValueChange}
                  >
                    <option>Select Unit</option>

                    {residents.map((resident) => (
                      <option value={resident.id}>{resident.fullname}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column md="3">
                  Tanggal Transaksi
                </Form.Label>
                <Col>
                  <Form.Control
                    type="date"
                    name="transactionDate"
                    placeholder="tanggal transaksi"
                    value={form.rentStartDate}
                    onChange={onValueChange}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column md="3">
                  Tanggal Mulai
                </Form.Label>
                <Col>
                  <Form.Control
                    type="date"
                    name="rentStartDate"
                    placeholder="tanggal mulai"
                    value={form.rentStartDate}
                    onChange={onValueChange}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column md="3">
                  Tanggal Selesai
                </Form.Label>
                <Col>
                  <Form.Control
                    type="date"
                    name="rentEndDate"
                    placeholder="tanggal selesai"
                    value={form.rentEndDate}
                    onChange={onValueChange}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column md="3">
                  Tanggal Pembayaran
                </Form.Label>
                <Col>
                  <Form.Control
                    type="date"
                    name="billingDate"
                    placeholder="tanggal pembayaran"
                    value={form.billingDate}
                    onChange={onValueChange}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column md="3">
                  Periode
                </Form.Label>
                <Col>
                  <Form.Control
                    type="number"
                    name="period"
                    placeholder="Periode"
                    value={form.period}
                    onChange={onValueChange}
                  ></Form.Control>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column md="3">
                  Harga
                </Form.Label>
                <Col>
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="price"
                    value={form.price}
                    onChange={onValueChange}
                  ></Form.Control>
                </Col>
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <Col md="9" className="offset-3">
                <Button
                  type="submit"
                  variant="success"
                  size="sm"
                  className="px-3 me-3"
                >
                  Save
                </Button>
              </Col>
            </Card.Footer>
          </Form>
        </>
      )}
    </Card>
  );
}
