import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="drawer drawer-mobile max-w-6xl mx-auto border">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content max-w-6xl container mx-auto flex flex-col items-center justify-center">
            {/* page content */}
            <h2>Dashboard</h2>
            <Outlet />
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu overflow-y-auto w-fit border font-medium text-base-content px-4 py-3">
              <li className="border rounded-md mb-2">
                <a>My Orders</a>
              </li>
              <li className="border rounded-md mb-2 bg-[#CDF7FF]">
                <a>Add A Review</a>
              </li>
              <li className="border rounded-md mb-2">
                <a>My Profile</a>
              </li>
              <li className="border rounded-md mb-2">
                <a>Manage All Orders</a>
              </li>
              <li className="border rounded-md mb-2">
                <a>Add A Product</a>
              </li>
              <li className="border rounded-md mb-2">
                <a>Make Admin</a>
              </li>
              <li className="border rounded-md mb-2">
                <a>Manage Products</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
