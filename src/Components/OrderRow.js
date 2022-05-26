import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

const OrderRow = ({ order, index, refetch }) => {
  const { billAmount, isPaid, orderQty, productName, productId, rate, _id } =
    order;

  // cancel order function
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
        fetch(`http://localhost:5000/order/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            Swal.fire({
              title: "Order Canceled!",
              html: "Order has been canceled.",
              icon: "success",
              showConfirmButton: false,
            });
          });
      }
    });
  };

  return (
    <tr className="">
      <th>{index + 1}</th>
      <td>{productName}</td>
      <td>{rate}</td>
      <td>{orderQty}</td>
      <td>{billAmount}</td>
      <td>
        {isPaid ? (
          <p className="text-md font-semibold text-green-700">Paid</p>
        ) : (
          <button className="btn btn-sm font-medium bg-green-600 text-white hover:bg-green-600 hover:text-white">
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
            className="btn btn-sm btn-warning"
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
