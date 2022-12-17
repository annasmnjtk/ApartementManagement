import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import residentSlice, {
  save,
  saveResident,
  selectResident,
  unselectResident,
  update,
} from "../../stores/master-residents-slice";
import { MaritalStatus, Resident, RESIDENT_PAGE } from "./resident-model";
import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { Button, Col, Form, Row } from "react-bootstrap";
import { updateResident } from "../../api/api-config";

export default function ResidentForm(props) {
  const { selectedResident } = useSelector(
    (store) => store[residentSlice.name]
  );
  const [fullname, setFullname] = useState(selectedResident?.fullname || "");
  const [email, setEmail] = useState(selectedResident?.email || "");
  const [phone, setPhone] = useState(selectedResident?.phone || "");
  const [maritalStatus, setMaritalStatus] = useState(
    selectedResident?.maritalStatus || ""
  );
  const [dependents, setDependents] = useState(
    selectedResident?.dependents || 0
  );
  const [birthDate, setBirthDate] = useState(selectedResident?.birthDate || "");

  // const [form, setForm] = useState(
  //   selectedResident ? { ...selectedResident } : { ...new Resident() }
  // );
  const params = useParams();
  // const navigate = useNavigate();
  const resident = selectResident(params.id);
  const dispatch = useDispatch();
  const { setPage } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedResident) {
      const resident = {
        ...selectedResident,
        fullname,
        email,
        phone,
        maritalStatus,
        dependents,
        birthDate,
      };
      dispatch(update(resident));
    } else {
      const resident = {
        fullname,
        email,
        phone,
        maritalStatus,
        dependents,
        birthDate,
      };
      dispatch(save(resident));
      setPage(RESIDENT_PAGE.LIST);
    }
    dispatch(unselectResident());
    setPage(RESIDENT_PAGE.LIST);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" as={Row}>
        <Form.Label column sm="3">
          Fullname
        </Form.Label>
        <Col sm="9">
          <Form.Control
            name="fullname"
            placeholder="Insert Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" as={Row}>
        <Form.Label column sm="3">
          Email
        </Form.Label>
        <Col sm="9">
          <Form.Control
            name="email"
            placeholder="Insert Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" as={Row}>
        <Form.Label column sm="3">
          Phone
        </Form.Label>
        <Col sm="9">
          <Form.Control
            name="phone"
            placeholder="Insert Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" as={Row}>
        <Form.Label column sm="3">
          Marital Status
        </Form.Label>
        <Col sm="9">
          <Form.Select
            name="maritalStatus"
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            <option>Select</option>
            <option value={MaritalStatus.SINGLE}>Single</option>
            <option value={MaritalStatus.TAKEN}>Taken</option>
            <option value={MaritalStatus.MARRIED}>Married</option>
            <option value={MaritalStatus.DIVORCED}>Divorced</option>
            <option value={MaritalStatus.JONES}>Jones</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" as={Row}>
        <Form.Label column sm="3">
          Dependents
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="number"
            name="dependents"
            placeholder="dependents"
            value={dependents}
            onChange={(e) => setDependents(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" as={Row}>
        <Form.Label column sm="3">
          Date of Birth
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="date"
            name="birthDate"
            placeholder="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Row>
        <Col sm="9" className="offset-sm-3">
          <Button type="submit" variant="success" size="sm">
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
