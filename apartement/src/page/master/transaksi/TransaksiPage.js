import { Table } from "react-bootstrap";
export default function TransaksiPage() {
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
        <tbody></tbody>
      </Table>
    </>
  );
}
