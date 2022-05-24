import React from "react";
import Footer from "../../Components/Footer";
import Banner from "./Banner";
import LatestProducts from "./LatestProducts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <>
      <Banner />
      <LatestProducts />
      {/* <Reviews /> */}
      <Footer />
    </>
  );
};

export default Home;
