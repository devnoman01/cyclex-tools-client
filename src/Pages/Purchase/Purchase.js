import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();

  const url = `http://localhost:5000/purchase/${id}`;
  const { data: item, isLoading } = useQuery(["part", id], () =>
    fetch(url, {
      method: "GET",
      //   headers: {
      //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //   },
    }).then((res) => res.json())
  );

  if (isLoading || loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="container mx-auto pt-6 pb-14 px-4">
        <h1 className="text-4xl font-medium text-center mb-8">
          Confirm Purchase
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4">
            <div className="card bg-base-100 shadow-md border pt-5">
              <h1 className="text-3xl text-center">Item Details</h1>
              <figure className="px-6 pt-6">
                <img src={item.img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body px-6 lg:text-left text-center">
                <h2 className="text-xl font-medium lg:text-left text-center">
                  {item.name}
                </h2>
                <p>
                  <small>
                    Part Id: <span className="font-medium">{item._id}</span>
                  </small>
                </p>
                <p className="text-justify">{item.description}</p>
                <p className="text-base">
                  Minimum Order:{" "}
                  <span className="font-medium text-lg">
                    {item.minimumOrderQty}
                  </span>
                </p>
                <p className="text-base">
                  Stock available:{" "}
                  <span className="font-medium text-lg">
                    {item.availableQty}
                  </span>
                </p>
                <p className="text-base">
                  Price per unit:{" "}
                  <span className="font-medium text-2xl">${item.price}</span>
                </p>
                {/* <div className="card-actions">
                  <button className="btn btn-primary w-full">Buy Now</button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="card bg-base-100 shadow-md border pt-5">
              <h1 className="text-3xl text-center">User Information</h1>
              {/* <form className="mx-auto w-full p-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    disabled
                    type="text"
                    value={user.displayName}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <input
                    disabled
                    type="text"
                    value={user.email}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">User Phone Number</span>
                  </label>
                  <input
                    type="text"
                    value={user.displayName}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">User Address</span>
                  </label>
                  <input
                    type="text"
                    value={user.displayName}
                    className="input input-bordered w-full"
                  />
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
