import { useDispatch, useSelector } from "react-redux";
import UnitTable from "./UnitTable";
import { useEffect } from "react";
import { RouteGuard } from "../../login/LoginGuard";
import unitSlice, { getAllUnit } from "../../../Store/master-units-slice";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function UnitPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    RouteGuard();
    const fetchData = async () => {
      const response = await dispatch(getAllUnit());
      console.log("page ini", response.payload);
    };
    fetchData();
  }, []);

  return (
    <>
      <Button
        className="btn-success my-4"
        onClick={() => navigate("/unit/form")}
      >
        Tambah Data
      </Button>
      <UnitTable />
    </>
  );
}

export default UnitPage;
