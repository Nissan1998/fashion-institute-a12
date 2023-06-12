import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import logo from "../assets/images/fashion.png";
import { FaSun, FaMoon } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useUsers from "../Hooks/useUsers";
import useInstructor from "../Hooks/useInstructor";
import useAdmin from "../Hooks/useAdmin";
const Navbar = () => {
  const { user, logOut, toggleDarkMode, darkMode, loading } =
    useContext(AuthContext);
  const [cart, refetch, isLoading] = useCart();
  refetch();
  const [users] = useUsers();
  const ownRole = users?.find((visitor) => visitor?.email === user?.email);
  // const [ownRole, setRole] = useState("");
  // const [isAdmin] = useAdmin();
  // const [isInstructor] = useInstructor();
  // if (isAdmin) {
  //   setRole("Admin");
  // } else if (isInstructor) {
  //   setRole("Instructor");
  // }

  // const price = cart?.reduce((sum, item) => item.price + sum, 0);

  const options = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes"> Classes</Link>
      </li>
    </>
  );
  const cartIcon = (
    <>
      <div className="flex-none mr-6">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {user && (
                <span className="badge indicator-item bg-blue-600 hover:bg-blue-700">
                  +{cart?.length || 0}
                </span>
              )}
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg text-black">
                {cart?.length || 0} Items
              </span>
              {/* {ownRole === "Admin" || ownRole === "Instructor" ? (
                ""
              ) : (
                <span className="text-info">Subtotal: ${price}</span>
              )} */}
              <div className="card-actions">
                <Link to="dashboard/mycart">
                  <button className="rounded-full px-12 py-1 bg-blue-600 hover:bg-blue-800 btn-block">
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  const handleLogout = () => {
    return logOut();
  };
  return (
    <div className="navbar container mx-auto max-w-sm fixed z-10 bg-opacity-40 bg-black text-white md:max-w-screen-2xl md:mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <p className="text-black">{options}</p>
            <button
              className={` px-4 py-2 rounded-full ml-2 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              }`}
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaMoon /> : <FaSun />}
            </button>
          </ul>
        </div>
        <div className="md:flex  items-center justify-items-center p-2">
          <Link className="btn hidden md:flex uppercase btn-ghost text-xl  w-16 md:w-28">
            <img src={logo} alt="" />
          </Link>
          <p className="text-xl font-bold hidden md:flex">Fashion Institute</p>
          <button
            className={` hidden md:flex px-4 py-2 rounded-full ml-2 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{options}</ul>
      </div>
      <div className="navbar-end">
        {ownRole?.role === "Admin" || ownRole?.role === "Instructor"
          ? ""
          : cartIcon}
        {ownRole?.role === "Admin" || ownRole?.role === "Instructor"
          ? " "
          : user && (
              <li className="list-none mr-5 font-semibold ml-2">
                <Link to="/dashboard/mycart">Dashboard</Link>
              </li>
            )}
        {user && ownRole?.role === "Instructor" && (
          <li className="list-none mr-5 font-semibold ml-2">
            <Link to="/dashboard/addAClass">Dashboard</Link>
          </li>
        )}
        {user && ownRole?.role === "Admin" && (
          <li className="list-none mr-5 font-semibold ml-2">
            <Link to="/dashboard/manageClasses">Dashboard</Link>
          </li>
        )}
        {user && (
          <img
            title={user.displayName}
            className="btn-circle mr-3"
            src={user.photoURL}
            alt=""
          />
        )}
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
