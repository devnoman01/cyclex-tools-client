import React, { useState } from "react";
import Swal from "sweetalert2";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ManageOrderRow = ({ order, index }) => {
  const {
    billAmount,
    isPaid,
    isShipped,
    orderQty,
    productName,
    productId,
    rate,
    userEmail,
    _id,
  } = order;
  const [shipped, setShipped] = useState(isShipped);

  const handleCancelOrder = () => {};

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
        Swal.fire({
          title: "Status Updated!",
          html: "Order has been Shipped.",
          icon: "success",
          showConfirmButton: false,
        });
      }
    });
  };

  const cancelButton = (
    <button
      onClick={handleCancelOrder}
      className="btn btn-sm border-2 border-red-600 bg-red-200 text-black"
    >
      <FontAwesomeIcon className="footer-icon mr-1" icon={faXmark} />
      Cancel
    </button>
  );

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
            className="btn btn-xs border-red-600 bg-red-200 text-black"
          >
            <FontAwesomeIcon className="footer-icon mr-1" icon={faXmark} />
            Cancel
          </button>
        )}
      </td>
      <td>
        {shipped ? (
          <p className="text-lg font-medium text-green-600">Shipped</p>
        ) : (
          <button
            onClick={handleShipNow}
            className="btn btn-xs bg-green-200 border-green-700 font-medium"
          >
            Ship
          </button>
        )}
      </td>
    </tr>
  );
};

export default ManageOrderRow;
