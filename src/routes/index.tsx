import Home from "../pages/Home";
import UseEffect_Ex from "../pages/UseEffect";
import UseState_Ex from "../pages/UseState";
import { I_Routes } from "../types";

export const routes: I_Routes[] = [
  {
    title: "Home",
    path: "/",
    element: <Home />,
  },
  {
    title: "State Hook",
    path: "/use-state",
    element: <UseState_Ex />,
  },
  {
    title: "Effect Hook",
    path: "/use-effect",
    element: <UseEffect_Ex />,
  },
];
