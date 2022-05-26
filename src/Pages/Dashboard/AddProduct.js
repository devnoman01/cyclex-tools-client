import React from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value.toUpperCase();
    const img = e.target.img.value;
    const description = e.target.description.value;
    const minimumOrderQty = parseInt(e.target.orderQty.value);
    const availableQty = parseInt(e.target.stockQty.value);
    const price = parseInt(e.target.price.value);

    const product = {
      name: name,
      img: img,
      description: description,
      minimumOrderQty: minimumOrderQty,
      availableQty: availableQty,
      price: price,
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
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
  };

  return (
    <div>
      <h3 className="text-2xl my-3">Add Product</h3>
      <div className="my-6">
        <form
          onSubmit={handleAddProduct}
          className="bg-slate-50 px-5 pt-4 pb-8 border-2 shadow-md rounded-lg"
        >
          <h3 className="text-3xl text-center">Edit Profile</h3>
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
