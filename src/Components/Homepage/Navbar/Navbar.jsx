import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => console.log("Successfull"))
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
                <a>Home</a>
              </li>
              <li>
                <a>Add Job</a>
              </li>
              <li>
                <a>My Posted Job</a>
              </li>
              <li>
                <a>My Bids</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Bid Requests</a>
              </li>
              <li>
                <a>Bid Requests</a>
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
          <a className="normal-case text-lg font-semibold" href="/">
            OMP
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Add Job</a>
            </li>
            <li>
              <a>My Posted Job</a>
            </li>
            <li>
              <a>My Bids</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Bid Requests</a>
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
