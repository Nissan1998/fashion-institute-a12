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
import PrivateRoute from "./PrivateRoute";
import ManageClasses from "../DashboardPages/AdminPages/ManageClasses";
import AllUsers from "../DashboardPages/AdminPages/AllUsers";
import AddAClass from "../DashboardPages/InstructorPage/AddAClass";
import MyClasses from "../DashboardPages/InstructorPage/MyClasses";
import Payment from "../DashboardPages/StudentPPages/PaymentPages/Payment";
import PaymentHistory from "../DashboardPages/StudentPPages/PaymentPages/PaymentHistory";
import UpdateClass from "../DashboardPages/InstructorPage/UpdateClass";

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
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyClassesCart></MyClassesCart>,
      },
      {
        path: "enrolledClasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manageUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "addAClass",
        element: <AddAClass></AddAClass>,
      },
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "updateClass/:id",
        element: <UpdateClass />,
      },
    ],
  },
]);
export default router;
