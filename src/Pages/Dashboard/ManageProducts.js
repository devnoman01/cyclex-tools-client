import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading";
import ProductRow from "../../Components/ProductRow";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  // using react query to get all products
  const { data, isLoading, refetch } = useQuery(["products", products], () =>
    fetch("http://localhost:5000/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h3 className="text-2xl my-3">Manage Products</h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Min. Order</th>
                <th>Stock</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <ProductRow
                  key={product._id}
                  product={product}
                  index={index}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
