import React, { lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Routes, Route, Link, Navigate } from "react-router-dom";
import PrivateRouter from "./routes/private";

import Header from "./components/Header";

import Footer from "./components/Footer";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Home from "./pages/Home";
import { privateRoute } from "./routes";
import Error from "./pages/Error";
import Layout, { LayoutSidebar } from "./Layouts";

function App() {
  return (
    <>
      <LayoutSidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {true ? (
            <Route path="/admin" element={<Home />} />
          ) : (
            <Navigate to="error/auth" />
          )}

          <Route path="/admin/" element={<PrivateRouter />}>
            {privateRoute.map((route, i) => (
              <Route path={route.path} element={route.element} key={i} />
            ))}
          </Route>
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </LayoutSidebar>
    </>
  );
}

export default App;
