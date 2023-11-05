import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"; // Import NavLink
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => console.log("Successful"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="navbar bg-teal-400">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink> 
              </li>
              <li>
                <NavLink to="/job">Add Job</NavLink> 
              </li>
              <li>
                <NavLink to="/my-posted-job">My Posted Job</NavLink> 
              </li>
              <li>
                <NavLink to="/my-bids">My Bids</NavLink> 
              </li>
              <li>
                <NavLink to="/parent">Parent</NavLink> 
                <ul className="p-2">
                  <li>
                    <NavLink to="/submenu-1">Submenu 1</NavLink> 
                  </li>
                  <li>
                    <NavLink to="/submenu-2">Submenu 2</NavLink> 
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/bid-requests">Bid Requests</NavLink> 
              </li>
              <li>
                <NavLink to="/bid-requests">Bid Requests</NavLink> 
              </li>
            </ul>
          </div>
          <a href="/">
            <img
              src="../../../../public/logo-removebg-preview.png"
              width={"40px"}
              alt=""
            />
          </a>
          <NavLink to="/" className="normal-case text-lg font-semibold">
            JobBook
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink> 
            </li>
            <li>
              <NavLink to="/job">Add Job</NavLink> 
            </li>
            <li>
              <NavLink to="/my-posted-job">My Posted Job</NavLink> 
            </li>
            <li>
              <NavLink to="/my-bids">My Bids</NavLink> 
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <NavLink to="/submenu-1">Submenu 1</NavLink> 
                  </li>
                  <li>
                    <NavLink to="/submenu-2">Submenu 2</NavLink> 
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink to="/bid-requests">Bid Requests</NavLink> 
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="text-white flex flex-col lg:flex-row items-center">
            {user ? (
              <>
                <div className="flex flex-col justify-center items-center">
                  <span>
                    <img
                      className="w-10 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                  </span>
                  <span>{user.displayName}</span>
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <a onClick={handleLogout}>Logout</a>
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="bg-gradient-to-r from-green-800 via-green-600 to-green-800 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
