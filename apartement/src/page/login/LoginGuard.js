import { Navigate, Outlet, useNavigate } from "react-router-dom";

export function RouteGuard() {
  if (!sessionStorage.getItem("user")) {
    return <Navigate to="/"></Navigate>;
  }
  return <Outlet />;
}
