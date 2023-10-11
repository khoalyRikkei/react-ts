import Login from "../CustomerPage/pages/Auth/Login";
import Register from "../CustomerPage/pages/Auth/Register";

export const customerRoute = [
  {
    path: "/login",
    element: <Login />,
    title: "Login",
    isAuth: false,
  },
  {
    path: "/register",
    element: <Register />,
    title: "Login",
    isAuth: false,
  },
];
