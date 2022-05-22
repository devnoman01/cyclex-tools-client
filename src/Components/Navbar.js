import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="border-b-2 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto bg-base-100 ">
        <div className="navbar container mx-auto">
          <div className="navbar-start pt-2 pb-3">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/" className="font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="font-medium">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/myPortfolio" className="font-medium">
                    My Portfolio
                  </Link>
                </li>

                {/* {user && ( */}
                <li>
                  <Link to="/dashboard" className="font-medium">
                    Dashboard
                  </Link>
                </li>
                {/* )} */}

                <li>
                  {user && <p className="underline mr-1">{user.displayName}</p>}
                </li>
                <li>
                  {user ? (
                    <button
                      onClick={() => {
                        signOut(auth);
                      }}
                      className="btn btn-active btn-sm"
                    >
                      Sign Out
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      className="btn bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
                    >
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            <Link to="/" className="normal-case">
              <img className="w-56 h-auto" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/" className="font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="font-medium">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/myPortfolio" className="font-medium">
                  My Portfolio
                </Link>
              </li>
              {/* {user && ( */}
              <li>
                <Link to="/dashboard" className="font-medium">
                  Dashboard
                </Link>
              </li>
              {/* )} */}
              <li>
                {user && <p className="underline mr-1">{user.displayName}</p>}
              </li>
              <li>
                {user ? (
                  <button
                    onClick={() => {
                      signOut(auth);
                    }}
                    className="btn btn-active bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="btn bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
