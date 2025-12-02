import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem("accessToken");

  // If NOT logged in, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // User is logged in → allow access
  return children;
};

export default ProtectedRoute;
