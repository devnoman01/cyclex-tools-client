import React from "react";

const MakeAdmin = () => {
  return (
    <div>
      <h3 className="text-2xl my-3">Manage User</h3>
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
              {/* {products.map((product, index) => (
                <ProductRow
                  key={product._id}
                  product={product}
                  index={index}
                  refetch={refetch}
                />
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
