import React, { useEffect, useState } from "react";
import ManageOrderRow from "../../Components/ManageOrderRow";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allOrders`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  return (
    <div>
      <h3 className="text-2xl my-3">Manage All Orders</h3>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Cancel Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <ManageOrderRow key={order._id} order={order} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
