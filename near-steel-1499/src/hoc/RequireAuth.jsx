import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getLocalData } from "../Utils/localStorage";

const RequireAuth = ({ children }) => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const location = useLocation();
  let token = getLocalData("token");

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
