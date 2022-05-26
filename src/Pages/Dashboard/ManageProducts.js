import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";
import ProductRow from "../../Components/ProductRow";
import auth from "../../firebase.init";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // using react query to get all products
  const { data, isLoading, refetch } = useQuery("products", () =>
    fetch("http://localhost:5000/products", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
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
                <th className="pr-16 lg:pr-0">Manage</th>
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
