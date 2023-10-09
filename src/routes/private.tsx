import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRouter() {
  let isAdmin = false;
  return <>{isAdmin ? <Outlet /> : <Navigate to="/error" />}</>;
}
