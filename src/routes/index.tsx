import Home from "../pages/Home";
import ExampleUseCallback from "../pages/UseCallback";
import ExampleUseContext from "../pages/UseContext";
import ExampleUseEffect from "../pages/UseEffect";
import ExampleUseMemo from "../pages/UseMemo";
import ExampleUseReducer from "../pages/UseReducer";
import ExampleUseRef from "../pages/UseRef";
import ExampleUseState from "../pages/UseState";
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
    element: <ExampleUseState />,
  },
  {
    title: "Effect Hook",
    path: "/use-effect",
    element: <ExampleUseEffect />,
  },

  {
    title: "Ref Hook",
    path: "/use-ref",
    element: <ExampleUseRef />,
  },

  {
    title: "useContext",
    path: "/use-context",
    element: <ExampleUseContext />,
  },

  {
    title: "useMemo",
    path: "/use-memo",
    element: <ExampleUseMemo />,
  },
  {
    title: "useCallback",
    path: "/use-callback",
    element: <ExampleUseCallback />,
  },

  {
    title: "useReducer",
    path: "/use-reducer",
    element: <ExampleUseReducer />,
  },
];
