import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Header from "./components/Header";
import HeaderMain from "./components/HeaderMain";

function App() {
  return (
    <>
      <HeaderMain />
      <Routes>
        {routes.map((route) => {
          const Element = route.componet;

          return <Route path={route.path} element={<Element />} />;
        })}
      </Routes>
    </>
  );
}

export default App;
