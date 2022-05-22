import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import FeaturedProductsCard from "../../Components/FeaturedProductsCard";
import Loading from "../../Components/Loading";

const LatestProducts = () => {
  // const [parts, setParts] = useState([]);

  const { data: parts, isLoading } = useQuery("parts", () =>
    fetch("http://localhost:5000/parts", {
      method: "GET",
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  // console.log(data);
  // useEffect(() => {
  //   fetch("parts.json")
  //     .then((res) => res.json())
  //     .then((data) => setParts(data));
  // }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="container mx-auto py-14 px-4">
        <h1 className="text-center text-4xl md:text-5xl font-medium mb-16 text-secondary">
          Latest Products
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parts.map((part) => (
            <FeaturedProductsCard key={part._id} part={part} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
