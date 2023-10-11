import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./CustomerPage/pages/Auth/Register";
import { customerRoute } from "./routes";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/register")}>Đăng ký</button>
      <Routes>
        {customerRoute.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
