import React from "react";

const ManageOrderRow = ({ order, index }) => {
  const { billAmount, isPaid, orderQty, productName, productId, rate, _id } =
    order;
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
          <button className="btn btn-sm font-medium">Pay Now</button>
        )}
      </td>
    </tr>
  );
};

export default ManageOrderRow;
