import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  isAuthenticated,
  children,
  adminRoute,
  isAdmin,
  redirect = "/login",
  redirectAdmin = "/login",
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirect} />;
  }

  if (adminRoute !== "admin" && isAdmin === true) {
    return <Navigate to={redirectAdmin} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
