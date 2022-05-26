import React, { useEffect, useState } from "react";
import FeaturedProductsCard from "../../Components/FeaturedProductsCard";
import Footer from "../../Components/Footer";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allProducts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, [products]);

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="container mx-auto py-14 px-4">
          <h1 className="text-center text-4xl md:text-5xl font-medium mb-16 text-primary">
            Our Products
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <FeaturedProductsCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
