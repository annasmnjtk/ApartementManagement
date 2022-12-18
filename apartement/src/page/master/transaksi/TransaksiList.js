import { useEffect, useRef } from "react";
import { Table, Spinner } from "react-bootstrap";
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
  return (
    <>
      <Table striped hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Unit Id</th>
            <th>Resident Id </th>
            <th>Transaction Date</th>
            <th>Rental Start Date</th>
            <th>Rental End Date</th>
            <th>Billing Date</th>
            <th>Period</th>
            <th>Price</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {loading.current && (
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
          )} */}

          {/* {!loading.current &&
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
                  <td></td>
                </tr>
              );
            })
          )} */}
        </tbody>
      </Table>
    </>
  );
}
