import React, { useState } from "react";
import Swal from "sweetalert2";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ManageOrderRow = ({ order, index, refetch }) => {
  const {
    billAmount,
    isPaid,
    isShipped,
    orderQty,
    productName,
    rate,
    userEmail,
    _id,
  } = order;
  const [shipped, setShipped] = useState(isShipped);

  const handleCancelOrder = () => {
    // e.preventDefault();
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
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
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

  const handleShipNow = (e) => {
    Swal.fire({
      title: "Update Shipment Status?",
      text: "Are you sure to update shipment status?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#218838",
      cancelButtonColor: "#C82333",
      confirmButtonText: "Update",
    }).then((result) => {
      if (result.isConfirmed) {
        setShipped(true);
        refetch();
        Swal.fire({
          title: "Status Updated!",
          html: "Order has been Shipped.",
          icon: "success",
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <tr className="">
      <th>{index + 1}</th>
      <th>{userEmail}</th>
      <td>{productName}</td>
      <td>{rate}</td>
      <td>{orderQty}</td>
      <td>{billAmount}</td>
      <td>
        {isPaid ? (
          <p className="font-medium text-green-600">Paid</p>
        ) : (
          <p className="font-medium text-error">Pending</p>
        )}
      </td>
      <td>
        {isPaid ? (
          <></>
        ) : (
          <button
            onClick={handleCancelOrder}
            className="btn btn-xs btn-warning"
          >
            <FontAwesomeIcon className="footer-icon mr-1" icon={faXmark} />
            Cancel
          </button>
        )}
      </td>
      <td>
        {shipped ? (
          <p className="text-md font-medium text-green-600">Shipped</p>
        ) : (
          <button
            onClick={handleShipNow}
            className="btn btn-xs btn-success text-white font-medium"
          >
            Deliver
          </button>
        )}
      </td>
    </tr>
  );
};

export default ManageOrderRow;
