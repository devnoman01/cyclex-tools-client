import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="sticky top-0 z-50">
      <div className="w-full mx-auto bg-base-100 ">
        <div className="mx-auto">
          <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              <div className="max-w-6xl mx-auto container my-3 px-3 navbar">
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-2"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>

                <div className="flex-1 justify-center lg:justify-start">
                  <Link to="/" className="normal-case">
                    <img className="w-56 h-auto" src={logo} alt="" />
                  </Link>
                </div>

                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>

                <div className="flex-none hidden lg:block">
                  <ul className="menu menu-horizontal">
                    <li>
                      <Link to="/" className="font-medium rounded-md">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/blogs" className="font-medium rounded-md">
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/myPortfolio"
                        className="font-medium rounded-md"
                      >
                        My Portfolio
                      </Link>
                    </li>
                    {user && (
                      <li>
                        <Link
                          to="/dashboard"
                          className="font-medium rounded-md mr-1"
                        >
                          Dashboard
                        </Link>
                      </li>
                    )}
                    {user && (
                      <li>
                        <p className="underline bg-blue-100 rounded-md mr-1">
                          {user.displayName}
                        </p>
                      </li>
                    )}

                    {user ? (
                      <li>
                        <button
                          onClick={() => {
                            signOut(auth);
                          }}
                          className={`${
                            user ? "block" : ""
                          } btn btn-active rounded-lg bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white`}
                        >
                          Sign Out
                        </button>
                      </li>
                    ) : (
                      <></>
                    )}
                    {user ? (
                      <></>
                    ) : (
                      <li>
                        <Link
                          to="/login"
                          className="btn rounded-lg bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
                        >
                          Login
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              {children}
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
              <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                <li>
                  <Link to="/" className="font-medium rounded-md">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="font-medium rounded-md">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/myPortfolio" className="font-medium rounded-md">
                    My Portfolio
                  </Link>
                </li>

                {user && (
                  <li>
                    <Link to="/dashboard" className="font-medium rounded-md">
                      Dashboard
                    </Link>
                  </li>
                )}

                {user && (
                  <li>
                    <p className="underline mr-1">{user.displayName}</p>
                  </li>
                )}

                {user && (
                  <li>
                    <button
                      onClick={() => {
                        signOut(auth);
                      }}
                      className="btn w-36 bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
                    >
                      Sign Out
                    </button>
                  </li>
                )}
                {user ? (
                  <></>
                ) : (
                  <li>
                    <Link
                      to="/login"
                      className="btn w-36 bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
