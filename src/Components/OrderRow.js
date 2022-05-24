import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

const OrderRow = ({ order, index }) => {
  const { billAmount, isPaid, orderQty, productName, productId, rate, _id } =
    order;

  const handleCancelOrder = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Cancel Order?",
      text: `Are you sure to cancel the order?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#C82333",
      cancelButtonColor: "#218838",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Order Canceled!",
          html: "Order has been canceled.",
          icon: "success",
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{productName}</td>
      <td>{rate}</td>
      <td>{orderQty}</td>
      <td>{billAmount}</td>
      <td>
        {isPaid ? (
          <p className="text-lg font-medium text-green-600">Paid</p>
        ) : (
          <button className="btn btn-sm font-medium border-2 border-green-600 bg-green-200 text-black">
            Pay Now
          </button>
        )}
      </td>
      <td>
        {isPaid ? (
          <></>
        ) : (
          <button
            onClick={handleCancelOrder}
            className="btn btn-sm border-2 border-red-600 bg-red-200 text-black"
          >
            <FontAwesomeIcon className="footer-icon mr-1" icon={faXmark} />
            Cancel
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
