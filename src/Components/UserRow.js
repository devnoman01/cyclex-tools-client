import React from "react";

const UserRow = ({ product, index }) => {
  // const { _id, name, img, minimumOrderQty, availableQty, price } = product;
  return (
    <tr className="hover">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      {/* <td>{index + 1}</td>
      <td>
        <div className="avatar">
          <div className="w-12 rounded">
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
      </td> */}
    </tr>
  );
};

export default UserRow;
