import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";
import ManageOrderRow from "../../Components/ManageOrderRow";
import auth from "../../firebase.init";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  // using react query to get all orders
  const { data, isLoading, refetch } = useQuery("order", () =>
    fetch("https://evening-spire-15810.herokuapp.com/allOrders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      })
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h3 className="text-2xl my-3">Manage All Orders</h3>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Cancel Order</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <ManageOrderRow
                  key={order._id}
                  order={order}
                  index={index}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
