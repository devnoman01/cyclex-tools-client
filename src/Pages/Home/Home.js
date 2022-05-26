import React from "react";
import Footer from "../../Components/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import LatestProducts from "./LatestProducts";
import OurPartners from "./OurPartners";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <>
      <Banner />
      <LatestProducts />
      <BusinessSummary />
      <OurPartners />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
