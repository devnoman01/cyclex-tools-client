import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading";
import OrderRow from "../../Components/OrderRow";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user, loading, error] = useAuthState(auth);

  const [userOrders, setUserOrders] = useState([]);

  // useEffect(() => {
  //   if (user) {
  //     fetch(`http://localhost:5000/order?email=${user.email}`, {
  //       method: "GET",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUserOrders(data);
  //       });
  //   }
  // }, [user]);

  const { data, isLoading, refetch } = useQuery(["order", user], () =>
    fetch(`http://localhost:5000/order?email=${user.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setUserOrders(data);
      })
  );

  if (loading || isLoading) {
    return <Loading />;
  }

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
                <th>Cancel Order</th>
              </tr>
            </thead>
            <tbody>
              {userOrders.map((order, index) => (
                <OrderRow
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

export default MyOrders;
