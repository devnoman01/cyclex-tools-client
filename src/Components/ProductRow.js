import React from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

const ProductRow = ({ product, index, refetch }) => {
  const { _id, name, img, minimumOrderQty, availableQty, price } = product;

  // delete product function
  const handleDeleteProduct = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Delete Product?",
      text: `Are you sure to delete ${name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#C82333",
      cancelButtonColor: "#218838",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://evening-spire-15810.herokuapp.com/products/${_id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
            Swal.fire({
              title: "Product Deleted!",
              html: "Product has been deleted.",
              icon: "success",
              showConfirmButton: false,
            });
          });
      }
    });
  };

  return (
    <tr className="">
      <td>{index + 1}</td>
      <td>
        <div className="avatar">
          <div className="w-14 rounded">
            <img className="" src={img} alt="Product Image" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{minimumOrderQty}</td>
      <td>{availableQty}</td>
      <td>
        <button
          onClick={handleDeleteProduct}
          className="btn btn-sm bg-error hover:bg-error"
        >
          <FontAwesomeIcon className="footer-icon mr-2" icon={faTrashCan} />
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
