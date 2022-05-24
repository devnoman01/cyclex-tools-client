import React from "react";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    const name = e.target.name.value;
    const img = e.target.img.value;
    const description = e.target.description.value;
    const minimumOrderQty = e.target.minimumOrderQty.value;
    const availableQty = e.target.availableQty.value;
    const price = e.target.price.value;

    const product = {
      name: "This is Card Title 3",
      img: "https://i.ibb.co/7Ry2kd3/doctor.jpg",
      description:
        "Complete line of OE quality shock absorbers and strut assemblies, incl...",
      minimumOrderQty: 45,
      availableQty: 450,
      price: 200,
    };
  };

  return (
    <div>
      <h3 className="text-2xl my-3">Add Product</h3>
      <div className="my-6">
        <form
          onSubmit={handleAddProduct}
          className="bg-slate-50 px-5 py-8 border-2 shadow-md rounded-lg"
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
              className="input input-sm lg:input-md input-bordered w-full"
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
              className="input input-sm lg:input-md input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Stock Available</span>
            </label>
            <input
              required
              type="number"
              name="stockQty"
              placeholder="Stock Available"
              className="input input-sm lg:input-md input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Minimum Order</span>
            </label>
            <input
              required
              type="number"
              name="orderQty"
              placeholder="Stock Available"
              className="input input-sm lg:input-md input-bordered w-full"
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
              className="input input-sm lg:input-md input-bordered w-full"
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
            className="btn w-full mt-6 rounded-lg bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
            type="submit"
            value="Update Profile"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
