import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../assets/images/cyclex-tools.png";
import logo1 from "../assets/images/cyclex-tools-1.png";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";
import { useQuery } from "react-query";
import Loading from "./Loading";

const Navbar = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

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

                <div className="flex-1  justify-center lg:justify-start">
                  <Link to="/" className="normal-case flex items-center">
                    <img className="w-16 md:w-20 h-auto" src={logo1} alt="" />
                    <span className="text-3xl lg:text-4xl font-semibold italic ml-2 pb-2 text-primary">
                      Cyclex Tools
                    </span>
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
                      <Link
                        to="/"
                        className="font-medium rounded-md text-primary text-lg"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        className="font-medium rounded-md text-primary text-lg"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/myPortfolio"
                        className="font-medium rounded-md text-primary text-lg"
                      >
                        My Portfolio
                      </Link>
                    </li>
                    {user && (
                      <li>
                        <Link
                          to="/dashboard"
                          className="font-medium rounded-md text-primary text-lg mr-1"
                        >
                          Dashboard
                        </Link>
                      </li>
                    )}
                    {user && (
                      <li>
                        <p className="underline bg-slate-50 rounded-md mr-1 text-primary">
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
                          } btn rounded-lg btn-primary text-white`}
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
                          className="btn rounded-lg btn-primary text-white"
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
                  <Link
                    to="/"
                    className="font-medium rounded-md text-primary text-md"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="font-medium rounded-md text-primary text-md"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myPortfolio"
                    className="font-medium rounded-md text-primary text-md"
                  >
                    My Portfolio
                  </Link>
                </li>

                {user && (
                  <li>
                    <Link
                      to="/dashboard"
                      className="font-medium rounded-md text-primary text-md"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}

                {user && (
                  <li>
                    <p className="underline text-primary mr-1">
                      {user.displayName}
                    </p>
                  </li>
                )}

                {user && (
                  <li>
                    <button
                      onClick={() => {
                        signOut(auth);
                      }}
                      className="btn w-fit btn-primary text-white"
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
                      className="btn w-fit btn-primary text-white"
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
