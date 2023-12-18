import React, { useEffect, useState, useNavigate } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import SignupPage from "../pages/Signuppage";
import LoginPage from "../pages/loginpage";
import SingleLead from "../pages/singleLead";
import NavBar from "../components/Nav";

export default function AllRoutes() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("jwt_token");
    console.log("token", token);
    if (token != null) {
      setAuthenticate(true);
    }
  });
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {authenticate ? (
        <>
          <Route
            path="/dashboard"
            element={
              <>
                <NavBar />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/create-user"
            element={
              <>
                <NavBar />
                <SignupPage />
              </>
            }
          />
          <Route
            path="/single-lead"
            element={
              <>
                <NavBar />
                <SingleLead />
              </>
            }
          />
        </>
      ) : null}
    </Routes>
  );
}
