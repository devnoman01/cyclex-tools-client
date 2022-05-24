import React, { useEffect, useState } from "react";
import ProductRow from "../../Components/ProductRow";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products]);

  return (
    <div>
      <h3 className="text-2xl my-3">Manage Products</h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price Rate</th>
                <th>Quantity</th>
                <th>Bill Amount</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {products.map((order, index) => (
                <ProductRow key={order._id} order={order} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
