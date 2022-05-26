import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

const AddProduct = () => {
  const navigate = useNavigate();
  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value.toUpperCase();
    const img = e.target.img.value;
    const description = e.target.description.value;
    const minimumOrderQty = parseInt(e.target.orderQty.value);
    const availableQty = parseInt(e.target.stockQty.value);
    const price = parseInt(e.target.price.value);

    if (minimumOrderQty <= availableQty) {
      const product = {
        name: name,
        img: img,
        description: description,
        minimumOrderQty: minimumOrderQty,
        availableQty: availableQty,
        price: price,
      };

      fetch("https://evening-spire-15810.herokuapp.com/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(product),
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((inserted) => {
          if (inserted.insertedId) {
            Swal.fire({
              title: "Product Added",
              html: `${product.name} added in product list`,
              icon: "success",
              showConfirmButton: false,
            });
            e.target.reset();
          } else {
            Swal.fire({
              title: "Failed to add product",
              html: "Request to add new product failed",
              icon: "error",
              showConfirmButton: false,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Check Order Quantity",
        html: "Order quantity should be less than stock quantity",
        icon: "error",
        showConfirmButton: false,
      });
    }
  };

  return (
    <div>
      <h3 className="text-2xl my-3">Add Product</h3>
      <div className="my-6">
        <form
          onSubmit={handleAddProduct}
          className="bg-slate-50 px-5 pt-4 pb-8 border-2 shadow-md rounded-lg"
        >
          <h3 className="text-3xl text-center">Add Product</h3>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder="Product Name"
              className="input input-md input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price per unit</span>
            </label>
            <input
              required
              type="number"
              name="price"
              placeholder="Product Price"
              className="input input-md input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available Stock Quantity</span>
            </label>
            <input
              required
              type="number"
              name="stockQty"
              placeholder="Stock Available"
              className="input input-md input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Minimum Order Quantity</span>
            </label>
            <input
              required
              type="number"
              name="orderQty"
              placeholder="Minimum Order Quantity"
              className="input input-md input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image Link</span>
            </label>
            <input
              required
              type="text"
              name="img"
              placeholder="Product Image Link"
              className="input input-md input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              required
              type="text"
              name="description"
              placeholder="Product Description"
              className="textarea textarea-bordered w-full"
            />
          </div>
          <input
            className="btn btn-primary w-full mt-6 rounded-lg text-white"
            type="submit"
            value="Update Profile"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
