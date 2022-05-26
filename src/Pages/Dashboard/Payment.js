import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const { id } = useParams();

  const url = `http://localhost:5000/order/${id}`;

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  const stripePromise = loadStripe(
    "pk_test_51L1zDJBLfT2oW3Ohm010AmVrFhEILcsnn7Ht9syssT3NJWahsedONCkMWlqQT9XKlHoV9tVXv4AEtHqCwEGDtVjs00Ve8UYKvJ"
  );

  return (
    <div>
      <h3 className="text-2xl my-3">Payment Portal</h3>
      <h4 className="text-blue-700 mb-5">
        Payment ID: <b>{id}</b>
      </h4>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card bg-base-100 w-full shadow-md my-3">
          <div className="card-body pt-5">
            <h2 className="text-center text-2xl font-medium mb-3">
              Order Info
            </h2>
            <p className="text-md">
              Product:{" "}
              <span className="text-blue-600 font-medium text-lg">
                {order?.productName}
              </span>
            </p>

            <p className="text-sm">Order Id: {order?.productId}</p>
            <p>
              Order Quantity:{" "}
              <span className="font-medium">{order?.orderQty}</span>
            </p>
            <p>
              Rate: <span className="font-medium">${order?.rate}</span>
            </p>
            <p>
              Total Bill:{" "}
              <span className="font-medium">${order?.billAmount}</span>
            </p>
            <div className="divider my-1"></div>
            <p>
              Buyer:{" "}
              <span className="font-medium text-lg">{order?.userName}</span>
            </p>
            <p>Email: {order?.userEmail}</p>
            <p>Phone: {order?.userPhone}</p>
            <p>Address: {order?.userAddress}</p>
            {/* <p className="card-title">Please pay for: {appointment?.treatment}</p> */}
            <p>
              Your :{" "}
              <span className="font-medium text-green-600">
                {/* {appointment?.date} at {appointment?.slot} */}
              </span>
            </p>
            <p>
              Please pay:{" "}
              <span className="font-medium text-green-600">
                {/* ${appointment?.price} */}
              </span>
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-md my-3">
          <div className="card-body pt-5">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
