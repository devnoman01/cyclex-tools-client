import React from "react";
import Footer from "../../Components/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Contact from "./Contact";
import LatestProducts from "./LatestProducts";
import OurPartners from "./OurPartners";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <>
      <Banner />
      <LatestProducts />
      <BusinessSummary />
      {/* extra part-1 */}
      <OurPartners />
      <Reviews />
      {/* extra part-2 */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
