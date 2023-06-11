import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaBookOpen,
  FaDollarSign,
  FaHome,
  FaUserGraduate,
  FaBookReader,
  FaUsers,
} from "react-icons/fa";
import useUsers from "../Hooks/useUsers";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

const Dashboard = () => {
  const [users] = useUsers();

  const { user } = useContext(AuthContext);

  const ownRole = users.find((visitor) => visitor.email === user?.email);

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-slate-600  flex flex-col">
        {/* Page content here */}

        <div className="flex justify-center items-center mt-10">
          <Outlet></Outlet>
        </div>

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu text-white font-bold p-4 w-80 h-full bg-gradient-to-t from-purple-950 to-purple-700">
          {/* Sidebar content here */}

          {ownRole?.role === "Admin" && (
            <>
              <li>
                <NavLink to="manageClasses">
                  <FaBookOpen /> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="manageUsers">
                  <FaUsers />
                  Manage Users
                </NavLink>
              </li>
            </>
          )}

          {ownRole?.role === "Instructor" && (
            <>
              <li>
                <NavLink to="addAClass">
                  <FaShoppingCart /> Add A Class
                </NavLink>
              </li>
              <li>
                <NavLink to="myClasses">
                  <FaBookOpen />
                  My Classes
                </NavLink>
              </li>
            </>
          )}

          {ownRole?.role === "Admin" || ownRole?.role === "Instructor" ? (
            ""
          ) : (
            <>
              <li>
                <NavLink to="mycart">
                  <FaShoppingCart /> My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="enrolledClasses">
                  <FaBookOpen />
                  My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="paymentHistory">
                  <FaDollarSign /> My Payment History
                </NavLink>
              </li>
            </>
          )}

          <h1 className="my-5 text-center">
            <hr></hr>
          </h1>
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/instructors">
              <FaUserGraduate /> Instructors
            </Link>
          </li>
          <li>
            <Link to="/classes">
              <FaBookReader /> Classes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
