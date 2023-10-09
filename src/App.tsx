import React, { lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import PrivateRouter from "./routes/private";
import { privateRoute, publicRouter } from "./routes";
import Header from "./components/Header";
import Error from "./pages/Error";
import ScrollToTop from "./common";
import ProductDetail from "./pages/Products/product-detail";
import Loading from "./common/Loading";

const LazyTest = lazy(
  () =>
    new Promise<{ default: React.ComponentType<any> }>((resolve) =>
      setTimeout(() => {
        import("./pages/TestLazy").then((module) =>
          resolve({ default: module.default })
        );
      }, 5000)
    )
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Link to="lazy">Lazy</Link>
      <Routes>
        {publicRouter.map((route, i) => {
          if (route.children) {
            <Route key={i} element={route.element} path={route.path}>
              {route.children.map((item, index) => {
                console.log(1111, route.path +'/'+item.path );
                
                return (
                <Route key={index} element={item.element} path={item.path} />
              )})}
            </Route>;
          }

          return (
            <Route key={i} element={route.element} path={route.path}></Route>
          );
        })}

        <Route
          element={
            <Suspense fallback={<Loading />}>
              <LazyTest />
            </Suspense>
          }
          path="/lazy"
        ></Route>
        <Route element={<ProductDetail />} path="product-detail/:id"></Route>
        <Route element={<Error />} path="*"></Route>
      </Routes>

      <Routes>
        <Route element={<PrivateRouter />}>
          {privateRoute[0].children.map((route) => (
            <Route element={route.element} path={route.path}></Route>
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
