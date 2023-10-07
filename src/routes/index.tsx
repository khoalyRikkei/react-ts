import ExampleAntd from "../pages/Antd";
import BoostrapEx from "../pages/Bootstrap";

import HackathonAdvanced from "../pages/HackathonAdvanced";
import Home from "../pages/Home";

export const routes = [
  {
    title: "Home",
    path: "/",
    componet: Home,
  },
  {
    title: "Bootstrap",
    path: "/bootstrap",
    componet: BoostrapEx,
  },
  {
    title: "Hackathon Advanced",
    path: "/hackathon-advanced",
    componet: HackathonAdvanced,
  },
  {
    title: "Antd",
    path: "/antd",
    componet: ExampleAntd,
  },
];
