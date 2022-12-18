import { useEffect, useRef } from "react";
import { Table, Spinner, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransaksi, transaksiSlice } from "../../../Store/transaksi-slice";
export default function TransaksiList(props) {
  const { transaksi } = useSelector((store) => store[transaksiSlice.name]);

  const dispatch = useDispatch();
  const loading = useRef(true);

  useEffect(() => {
    if (loading.current) {
      dispatch(fetchTransaksi());
      loading.current = false;
    }
  }, [dispatch]);
  console.log(transaksi);
  return (
    <>
      <Table striped hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Floor</th>
            <th>Unit</th>
            <th>Resident</th>
            <th>Status</th>
            <th>Price</th>
            <th>Transaction Price</th>
            <th>Profit</th>
            <th>Transaction Date</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Billing Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading.current && (
            <tr>
              <td colSpan={9} className="text-center text-info fw-bold">
                <Spinner
                  animation="border"
                  variant="info"
                  size="sm"
                  as="span"
                />
                Loading...
              </td>
            </tr>
          )}

          {!loading.current &&
          Array.isArray(transaksi) &&
          transaksi.length === 0 ? (
            <tr>
              <td colSpan={11} className="text-center fw-bold">
                No Data
              </td>
            </tr>
          ) : (
            !loading.current &&
            transaksi.length > 0 &&
            transaksi.map((trx, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{trx.unit.floor}</td>
                  <td>{trx.unit.unitCode}</td>
                  <td>{trx.resident.fullName}</td>
                  <td>{trx.unit.status}</td>
                  <td>100</td>
                  <td>1000</td>
                  <td>{trx.profit}</td>
                  <td>{trx.transactionDate}</td>
                  <td>{trx.rentStartDate}</td>
                  <td>{trx.rentEndDate}</td>
                  <td>{trx.billingDate}</td>
                  <td>
                    <Button>Detail</Button>
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
