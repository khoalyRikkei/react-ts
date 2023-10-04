import ExBMI from "../pages/BMI";
import Home from "../pages/Home";
import StudentManagement from "../pages/StudentManagement";
import UseEffectExample from "../pages/UseEffect";
import UseState from "../pages/UseState";
import UserManagement from "../pages/UseStateEx";

export const routes = [
  {
    title: "Home",
    path: "/",
    component: Home,
  },
  {
    title: "useState",
    path: "use-state",
    component: UseState,
  },
  {
    title: "useStateEx1",
    path: "use-management",
    component: UserManagement,
  },
  {
    title: "useEffect",
    path: "use-effect",
    component: UseEffectExample,
  },
  {
    title: "BMI - phân loại",
    path: "ex-bmi",
    component: ExBMI,
  },
  {
    title: "Student",
    path: "student-management",
    component: StudentManagement,
  },
];
