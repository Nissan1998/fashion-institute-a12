import Home from "../HomePages/Home";
import MainLayout from "../Layout/MainLayout";

import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Classes from "../Pages/Classes";
import Dashboard from "../Layout/Dashboard";
import MyClassesCart from "../DashboardPages/StudentPPages/MyClassesCart";
import MyEnrolledClasses from "../DashboardPages/StudentPPages/MyEnrolledClasses";
import AllInstructors from "../Pages/AllInstructors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "instructors",
        element: <AllInstructors></AllInstructors>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "mycart",
        element: <MyClassesCart></MyClassesCart>,
      },
      {
        path: "enrolledClasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
    ],
  },
]);
export default router;
