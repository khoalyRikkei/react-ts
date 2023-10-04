import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./layouts";
import { Route, Routes } from "react-router";
import { routes } from "./routes";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
