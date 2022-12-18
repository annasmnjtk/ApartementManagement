import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Button, Col, Form, FormLabel, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import Header from "../../../layout/Header";
import { saveUnit, updateUnit } from "../../../Store/master-units-slice";

export default function UnitForm() {
  const [form, setForm] = useState({
    id: nanoid(),
    unitCode: "",
    floor: 0,
    rooms: 0,
    direction: "",
    status: "",
    balcony: true,
    furnished: true,
    rentPrice: 0,
    rentSchema: "",
    sellPrice: 0,
    resident: "",
  });
  const location = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!location.state.isUpdate) {
      dispatch(saveUnit(form));
    } else {
      dispatch(updateUnit(form));
    }
    navigate("/unit");
  }

  useEffect(() => {
    if (location.state && location.state.isUpdate) {
      const { data } = location.state;
      setForm(data);
    }
  }, [location]);

  return (
    <>
      <Header />
      <Row className="d-flex justify-content-center align-item-center my-5">
        <Col md="5">
          <Form onSubmit={handleSubmit}>
            <FormLabel as="h2" className="text-center">
              Data Unit
            </FormLabel>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Unit Code</Form.Label>
              <Form.Control
                value={form.unitCode}
                type="text"
                placeholder="Enter UnitCode"
                onChange={(e) => setForm({ ...form, unitCode: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Floor</Form.Label>
              <Form.Control
                placeholder="Floor"
                value={form.floor}
                onChange={(e) => setForm({ ...form, floor: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Rooms</Form.Label>
              <Form.Control
                placeholder="Rooms"
                value={form.rooms}
                onChange={(e) => setForm({ ...form, rooms: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Direction</Form.Label>
              <Form.Select
                placeholder="direction"
                value={form.direction}
                onChange={(e) =>
                  setForm({ ...form, direction: e.target.value })
                }
              >
                <option>Choose </option>
                <option>North</option>
                <option>North East</option>
                <option>East</option>
                <option>South East</option>
                <option>South</option>
                <option>South West </option>
                <option>West </option>
                <option>North West </option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Status</Form.Label>
              <Form.Select
                placeholder="status"
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              >
                <option>Choose </option>
                <option>Available</option>
                <option>Rented</option>
                <option>Sold</option>
                <option>Unavailable</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Balcony</Form.Label>
              <Form.Select
                placeholder="balcony"
                value={form.balcony}
                onChange={(e) => setForm({ ...form, balcony: e.target.value })}
              >
                <option>Choose</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Furnished</Form.Label>
              <Form.Select
                placeholder="furnished"
                value={form.furnished}
                onChange={(e) =>
                  setForm({ ...form, furnished: e.target.value })
                }
              >
                <option>Choose</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Rent Price</Form.Label>
              <br />
              <Form.Control
                placeholder="IDR"
                prefix="IDR "
                value={form.rentPrice}
                onChange={(e) =>
                  setForm({ ...form, rentPrice: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Schema</Form.Label>
              <Form.Select
                placeholder="schema"
                value={form.rentSchema}
                onChange={(e) =>
                  setForm({ ...form, rentSchema: e.target.value })
                }
              >
                <option>Choose </option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Sell Price </Form.Label>
              <br />
              <Form.Control
                placeholder="IDR"
                prefix="IDR "
                value={form.sellPrice}
                onChange={(e) =>
                  setForm({ ...form, sellPrice: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Resident</Form.Label>
              <br />
              <Form.Control
                type="text"
                placeholder="Please enter name"
                prefix="IDR "
                value={form.resident}
                onChange={(e) => setForm({ ...form, resident: e.target.value })}
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button
                variant="light"
                type="reset"
                onClick={() => navigate("/unit")}
              >
                Return
              </Button>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
}
