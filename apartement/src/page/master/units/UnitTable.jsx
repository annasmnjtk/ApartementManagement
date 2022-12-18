import { Button, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteUnit, getAllUnit } from "../../../Store/master-units-slice";

export default function UnitTable() {
  const { units, loading } = useSelector((store) => store.unit);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log("Table ini: ", store);
  // }, [store]);

  function handleUpdate(id) {
    const selectedUnit = units.find((u) => u.id === id);
    navigate(`/unit/form`, { state: { isUpdate: true, data: selectedUnit } });
  }

  return (
    <>
      <Table className="text-center" striped hover responsive>
        <thead className="table-success">
          <tr>
            <th>#</th>
            <th>Floor</th>
            <th>Unit</th>
            <th>Status</th>
            <th>Price</th>
            <th>Rental Price</th>
            <th>Rental Schema</th>
            <th>Details</th>
            <th>Resident</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={12} className="text-center text-info fw-bold">
                <Spinner animation="border" variant="info" />
                Loading...
              </td>
            </tr>
          )}
          {Array.isArray(units) && units.length === 0 ? (
            <tr>
              <td colSpan={12} className="text-center fw-bold">
                No data
              </td>
            </tr>
          ) : (
            units.map((u, index) => {
              return (
                <tr key={index}>
                  <td className="align-middle">{index + 1}</td>
                  <td className="align-middle">{u.floor}</td>
                  <td className="align-middle">{u.unitCode}</td>
                  <td className="align-middle">
                    <span className="badge text-danger">{u.status}</span>
                  </td>
                  <td className="align-middle">{u.sellPrice}</td>
                  <td className="align-middle">{u.rentPrice}</td>
                  <td className="align-middle">{u.rentSchema}</td>
                  <td className="align-middle">
                    <ul>
                      <li>
                        Rooms:
                        <b> {u.rooms}</b>
                      </li>
                      <li>
                        Furnished:
                        <b> {u.furnished}</b>
                      </li>
                      <li>
                        Balcony:
                        <b> {u.balcony}</b>
                      </li>
                      <li>
                        Direction:
                        <b> {u.direction}</b>
                      </li>
                    </ul>
                  </td>
                  <td className="align-middle">{u.resident}</td>
                  <td className="align-middle">
                    <Button
                      className="btn-warning mx-3"
                      onClick={() => handleUpdate(u.id)}
                    >
                      Update
                    </Button>
                    <Button
                      className="btn-danger"
                      onClick={() => {
                        dispatch(deleteUnit(u.id));
                        dispatch(getAllUnit());
                      }}
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
    </>
  );
}
