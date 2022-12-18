import { useEffect, useRef, useState } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteResident } from "../../API/api-config";
import residentSlice, {
  fetchResidents,
  selectResident,
} from "../../Store/master-residents-slice";

export default function ResidentTable(props) {
  const { residents } = useSelector((store) => store[residentSlice.name]);
  const dispatch = useDispatch();
  const loading = useRef(true);
  const [del, setDel] = useState();

  useEffect(() => {
    if (loading.current) {
      dispatch(fetchResidents());
      loading.current = false;
    }
  }, [dispatch]);

  return (
    <Table striped hover responsive>
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Fullname</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Marital Status</th>
          <th>Dependents</th>
          <th>Date of Birth</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {loading.current && (
          <tr>
            <td colSpan={9} className="text-center text-info fw-bold">
              <Spinner animation="border" variant="info" size="sm" as="span" />
              Loading...
            </td>
          </tr>
        )}
        {!loading.current &&
        Array.isArray(residents) &&
        residents.length === 0 ? (
          <tr>
            <td colSpan={11} className="text-center fw-bold">
              No Data
            </td>
          </tr>
        ) : (
          !loading.current &&
          residents.length > 0 &&
          residents.map((resident, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{resident.fullname}</td>
                <td>{resident.email}</td>
                <td>{resident.phone}</td>
                <td>{resident.maritalStatus}</td>
                <td>{resident.dependents}</td>
                <td>{resident.birthDate}</td>
                <td className="">
                  <Button
                    as={Link}
                    className="me-2"
                    variant="dark"
                    size="sm"
                    onClick={() => {
                      dispatch(selectResident(resident.id));
                    }}
                    to={`form/${resident.id}`}
                  >
                    Update
                  </Button>
                  <Button
                    as={Link}
                    className="me-2"
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      loading.current = true;
                      dispatch(deleteResident(resident.id));
                      setDel(!del);
                    }}
                    to=""
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </Table>
  );
}
