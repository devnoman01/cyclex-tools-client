import React from "react";
import img from "../../assets/images/banner-img.jpg";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto w-full relative">
      <div className="container mx-auto px-3 lg:px-0">
        <div className="w-full lg:my-20 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 py-10">
            <h1 className="text-5xl text-primary font-medium">
              We manufactures cycle parts and components
            </h1>
            <p className="my-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
              Exercitationem suscipit architecto neque, laboriosam non atque
              alias vitae! Alias hic sequi ipsam! Enim, modi quod praesentium.
            </p>
            <button className="btn btn-primary text-white">Explore</button>
          </div>
          <div className="w-full lg:w-1/2">
            <img className="w-4/5 mx-auto" src={img} alt="" />
            {/* <img
              src="https://www.bikeparts.com/cms/tiles/lg/tile300.jpg"
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
