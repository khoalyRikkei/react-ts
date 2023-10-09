import About from "../pages/About";
import Admin from "../pages/Admin";
import ProductManagement from "../pages/Admin/ProductManagement";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";

export const privateRoute = [
  {
    path: "product-management",
    element: <ProductManagement />,
    title: "product-management",
  },
  {
    path: "user-management",
    element: <ProductManagement />,
    title: "user-management",
  },
  {
    path: "order-management",
    element: <ProductManagement />,
    title: "order-management",
  },
];

export const publicRouter = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/about",
    element: <About />,
    title: "About",
  },
  {
    path: "/services",
    element: <Services />,
    title: "services",
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    title: "Portfolio",
  },
];
