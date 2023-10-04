import React, { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {routes.map((route, i) => {
          const Element = route.component;
          return (
            <Route key={i} path={route.path} element={<Element />}>
              {route.title}
            </Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
