import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <div>
        <div className="drawer drawer-mobile max-w-6xl mx-auto h-auto bg-gray-100">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-gray-100 rounded-md max-w-6xl container mx-auto p-5 pl-0">
            {/* page content */}
            <div className="border-l-2 pl-5">
              <h2 className="text-3xl mb-2">Dashboard</h2>
              <p className="border-b-2 border-gray-300 pb-2">
                User:{" "}
                <span className="font-semibold text-blue-700">
                  {user.email}
                </span>
              </p>
              <hr />

              <Outlet />
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu overflow-y-auto bg-base-100 w-fit font-medium  text-base-content px-4 my-0 py-3">
              <li className="border-2 border-gray-300 rounded-md mb-2">
                <Link
                  to="/dashboard/myProfile"
                  className={`{selected?"bg-gray-400":""}`}
                >
                  My Profile
                </Link>
              </li>
              <li className="border-2 border-gray-300 rounded-md mb-2">
                <Link
                  to="/dashboard/myOrders"
                  className={`{selected?"bg-gray-400":""}`}
                >
                  My Orders
                </Link>
              </li>
              <li className="border-2 border-gray-300 rounded-md mb-2">
                <Link
                  to="/dashboard/addReview"
                  className={`{selected?"bg-gray-400":""}`}
                >
                  Add A Review
                </Link>
              </li>

              <li className="border-2 border-gray-300 rounded-md mb-2">
                <Link
                  to="/dashboard/manageProducts"
                  className={`{selected?"bg-gray-400":""}`}
                >
                  Manage Products
                </Link>
              </li>
              <li className="border-2 border-gray-300 rounded-md mb-2">
                <Link
                  to="/dashboard/manageAllOrders"
                  className={`{selected?"bg-gray-400":""}`}
                >
                  Manage All Orders
                </Link>
              </li>
              <li className="border-2 border-gray-300 rounded-md mb-2">
                <Link
                  to="/dashboard/addProduct"
                  className={`{selected?"bg-gray-400":""}`}
                >
                  Add A Product
                </Link>
              </li>
              <li className="border-2 border-gray-300 rounded-md mb-2">
                <Link
                  to="/dashboard/makeAdmin"
                  className={`{selected?"bg-gray-400":""}`}
                >
                  Make Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
