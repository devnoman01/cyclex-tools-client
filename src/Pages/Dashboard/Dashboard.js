import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import useUser from "../../Hooks/useUser";

const Dashboard = () => {
  const [user, loading, error] = useUser();

  return (
    <>
      <div>
        <div className="drawer drawer-mobile max-w-6xl mx-auto border h-auto">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content max-w-6xl container mx-auto p-5 bg-slate-100">
            {/* page content */}
            <h2 className="text-3xl mb-2">Dashboard</h2>
            <p className="border-b-2 border-gray-300 pb-2">
              User:{" "}
              <span className="font-semibold text-blue-700">{user.email}</span>
            </p>

            <Outlet />
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu overflow-y-auto w-fit border-r-2 font-medium bg-slate-50 text-base-content px-4 py-3">
              <li className="border rounded-md mb-2">
                <Link
                  to="/dashboard/myOrders"
                  className={`{selected?"bg-gray-400":""}`}
                >
                  My Orders
                </Link>
              </li>
              <li className="border rounded-md mb-2">
                <Link
                  to="/dashboard/addReview"
                  className={`{selected?"bg-gray-400":""}`}
                >
                  Add A Review
                </Link>
              </li>
              <li className="border rounded-md mb-2">
                <Link
                  to="/dashboard/myProfile"
                  className={`{selected?"bg-gray-400":""}`}
                >
                  My Profile
                </Link>
              </li>
              <li className="border rounded-md mb-2">
                <Link
                  to="/dashboard/manageProducts"
                  className={`{selected?"bg-gray-400":""}`}
                >
                  Manage Products
                </Link>
              </li>
              <li className="border rounded-md mb-2">
                <Link
                  to="/dashboard/manageAllOrders"
                  className={`{selected?"bg-gray-400":""}`}
                >
                  Manage All Orders
                </Link>
              </li>
              <li className="border rounded-md mb-2">
                <Link
                  to="/dashboard/addProduct"
                  className={`{selected?"bg-gray-400":""}`}
                >
                  Add A Product
                </Link>
              </li>
              <li className="border rounded-md mb-2">
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
