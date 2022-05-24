import React from "react";

const ProductRow = ({ product, index }) => {
  const { _id, name, img, minimumOrderQty, availableQty, price } = product;
  return (
    <tr className="hover">
      <td>{index + 1}</td>
      <td>
        <div class="avatar">
          <div class="w-12 rounded">
            <img src={img} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{minimumOrderQty}</td>
      <td>{availableQty}</td>
      <td>
        <button className="btn btn-sm ">Manage</button>
      </td>
      {/* <th>{index + 1}</th>
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
      </td> */}
    </tr>
  );
};

export default ProductRow;
