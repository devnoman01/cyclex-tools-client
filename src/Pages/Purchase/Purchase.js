import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../Components/Footer";
import Loading from "../../Components/Loading";
import auth from "../../firebase.init";

const Purchase = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [orderButtonStatus, setOrderButtonStatus] = useState(true);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [item, setItem] = useState([]);
  const [quantityError, setQuantityError] = useState("");

  const [user, loading, error] = useAuthState(auth);

  const { id } = useParams();

  const url = `http://localhost:5000/purchase/${id}`;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setItem(data);
        setBillAmount(data.price * data.minimumOrderQty);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  const calculateTotalCost = (event) => {
    const rate = item.price;
    const quantity = event.target.value;
    if (quantity >= item.minimumOrderQty && quantity <= item.availableQty) {
      setItemQuantity(quantity);
      const addValue = parseInt(quantity * rate);
      setBillAmount(addValue);
      setQuantityError("");
      setOrderButtonStatus(true);
    } else {
      setOrderButtonStatus(false);
      setBillAmount(0);
      setQuantityError("Enter valid quantity");
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      billAmount: billAmount,
      isPaid: false,
      isShipped: false,
      orderQty: itemQuantity,
      productId: item._id,
      productName: item.name,
      rate: item.price,
      userAddress: e.target.address.value,
      userEmail: user.email,
      userName: user.displayName,
      userPhone: e.target.phone.value,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Order Place Successful",
            html: `Your ordered ${itemQuantity} ${item.name}`,
            timer: 4000,
            // timerProgressBar: false,
            icon: "success",
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            title: "Something Wrong",
            html: "Order place failed. Please try again.",
            icon: "error",
            showConfirmButton: false,
          });
        }
      });
  };

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="container mx-auto pt-6 pb-14 px-4">
          <h1 className="text-4xl font-medium text-center mb-8">
            Purchase Product
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-2 sm:p-4">
              <div className="card bg-base-100 shadow-md border pt-5">
                <h1 className="text-3xl text-center">Product Details</h1>
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
            <div className="p-2 sm:p-4">
              <div className="card bg-base-100 shadow-md border pt-5">
                <h1 className="text-3xl text-center">User Information</h1>
                <form
                  onSubmit={handlePlaceOrder}
                  className="mx-auto w-full p-4"
                >
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
                      required
                      name="phone"
                      type="number"
                      className="input input-bordered w-full"
                      placeholder="User Phone Number"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">User Address</span>
                    </label>
                    <textarea
                      required
                      name="address"
                      className="textarea textarea-bordered h-20"
                      placeholder="User Address"
                    ></textarea>
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">
                        Order Quantity{" "}
                        <span className="font-medium text-secondary">
                          (min:{item.minimumOrderQty} max:
                          {item.availableQty} )
                        </span>
                      </span>
                    </label>
                    <input
                      required
                      name="orderQty"
                      type="number"
                      defaultValue={item.minimumOrderQty}
                      min={item.minimumOrderQty}
                      max={item.availableQty}
                      className="input input-bordered w-full"
                      placeholder="Order Quantity"
                      onKeyUp={calculateTotalCost}
                    />
                    <p>
                      <small className="text-red-500 pl-2">
                        {quantityError}
                      </small>
                    </p>
                  </div>
                  <h3 className="text-center text-2xl my-4">
                    Total price:{" "}
                    <span className="font-medium">${billAmount}</span>
                  </h3>
                  <input
                    disabled={!orderButtonStatus}
                    type="submit"
                    value="Place Order"
                    className={`${
                      orderButtonStatus
                        ? "btn w-full bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
                        : "btn btn-disabled w-full"
                    }`}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Purchase;
