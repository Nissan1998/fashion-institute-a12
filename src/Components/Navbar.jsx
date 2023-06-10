import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import logo from "../assets/images/fashion.png";
import { FaSun, FaMoon } from "react-icons/fa";
const Navbar = () => {
  const { user, logOut, toggleDarkMode, darkMode } = useContext(AuthContext);

  const options = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>Instructors</Link>
      </li>
      <li>
        <Link> Classes</Link>
      </li>
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
          </ul>
        </div>
        <div className="md:flex  items-center justify-items-center p-2">
          <Link className="btn uppercase btn-ghost text-xl  w-16 md:w-28">
            <img src={logo} alt="" />
          </Link>
          <p className="text-xl font-bold hidden md:flex">Fashion Institute</p>
          <button
            className={`px-4 py-2 rounded-full ml-2 ${
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
        {user && (
          <li className="list-none mr-5 font-semibold">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}
        {user && (
          <img
            title={user?.displayName}
            className="btn-circle mr-3"
            src={user?.photoURL}
            alt=""
          />
        )}
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
