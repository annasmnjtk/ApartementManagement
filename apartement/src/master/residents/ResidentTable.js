import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import residentSlice from "../../stores/master-residents-slice";

export default function ResidentTable(props) {
  const { residents } = useSelector((store) => store[residentSlice.name]);
  const dispatch = useDispatch();

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
        {Array.isArray(residents) && residents.length === 0 ? (
          <tr>
            <td colSpan={11} className="text-center fw-bold">
              No Data
            </td>
          </tr>
        ) : (
          residents.map((resident, index) => {
            console.log(resident);
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{resident.fullname}</td>
                <td>{resident.email}</td>
                <td>{resident.phone}</td>
                <td>{resident.maritalStatus}</td>
                <td>{resident.dependents}</td>
                <td>{resident.birthDate}</td>
              </tr>
            );
          })
        )}
      </tbody>
    </Table>
  );
}
