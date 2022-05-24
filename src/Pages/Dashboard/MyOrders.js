import React, { useEffect, useState } from "react";
import OrderRow from "../../Components/OrderRow";
import useUser from "../../Hooks/useUser";

const MyOrders = () => {
  const [user, loading, error] = useUser();

  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/order?user=${user.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setUserOrders(data);
      });
  }, [user, userOrders]);

  return (
    <div>
      <h3 className="text-2xl my-3">My Orders</h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price Rate</th>
                <th>Quantity</th>
                <th>Bill Amount</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {userOrders.map((order, index) => (
                <OrderRow key={order._id} order={order} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
