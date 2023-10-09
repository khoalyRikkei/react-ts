import About from "../pages/About";
import Admin from "../pages/Admin";
import ProductManagement from "../pages/Admin/ProductManagement";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Product from "../pages/Products";
import User from "../pages/User";
import Favourite from "../pages/User/Favourite";
import Payment from "../pages/User/Payment";

export const privateRoute = [
  {
    path: "/admin",
    element: <Admin />,
    title: "Admin",
    children: [
      {
        path: "/admin/product-management",
        element: <ProductManagement />,
        title: "product-management",
      },
    ],
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
    path: "/product",
    element: <Product />,
    title: "Product",
  },
  {
    path: "/user",
    element: <Product />,
    title: "User",
    children: [
      {
        path: "my-favourite",
        element: <Favourite />,
        title: "my favourite",
      },
      {
        path: "payment",
        element: <Payment />,
        title: "my payment",
      },
    ],
  },
];
