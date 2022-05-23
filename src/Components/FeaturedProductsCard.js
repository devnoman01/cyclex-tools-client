import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedProductsCard = ({ product }) => {
  const navigate = useNavigate();

  const { _id, name, img, description, price, minimumOrderQty, availableQty } =
    product;

  const handleOrder = () => {
    navigate(`/purchase/${_id}`);
  };

  return (
    <div className="card bg-base-100 border shadow-md">
      <figure className="p-5 border rounded-lg">
        <img className="w-full" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-2">{name}</h2>
        <span className="text-sm text-justify mb-3">{description}</span>
        <span className="text-base">Minimum Order: {minimumOrderQty}</span>
        <span className="text-base">Available stock: {availableQty}</span>
        <p className="text-2xl font-medium mb-3">
          ${price}
          <span className="text-sm">/per unit</span>
        </p>
        <div className="card-actions justify-center">
          <button
            onClick={handleOrder}
            className="btn btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsCard;
