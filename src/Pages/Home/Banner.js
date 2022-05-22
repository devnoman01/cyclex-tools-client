import React from "react";
import shocks from "../../assets/images/shocks_struts.png";
import steering from "../../assets/images/steering.png";
import braking from "../../assets/images/braking-drum-ring.png";
import muffler from "../../assets/images/catalytic-converters-muffler.png";
import pistons from "../../assets/images/engine-pistons-shaft.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    // <div className="bg-[#F7FBFC] border-b border-gray-100 w-full">
    <div className="hero max-w-6xl mx-auto relative">
      <div className="hero-content container mx-auto pt-10 pb-0 md:py-10 lg:py-12 flex-col lg:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold">
            We manufacture world class car parts and components
          </h1>
          <p className="py-6 w-full text-justify font-medium md:text-left md:w-4/5">
            Auto-Part Manufacturer is world famous for manufacturing cart parts
            and components. Our products are high quality, long lasting and cost
            efficient compared to others products available in market.
          </p>
          <Link
            to="/login"
            className="btn bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
          >
            Order Now
          </Link>
        </div>
        <div className="carousel w-full row md:w-1/2 my-20">
          <div id="slide1" className="carousel-item relative w-full">
            {/* <div> */}
            <img src={shocks} className="w-full" />
            {/* <p className="text-center text-xl font-medium mt-0">
                Shocks and Struts
              </p>
            </div> */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
              <a
                href="#slide5"
                className="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            {/* <div> */}
            <img src={steering} className="w-full" />
            {/* <p className="text-center text-xl font-medium mt-0">
                Steering and Suspension
              </p>
            </div> */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
              <a
                href="#slide1"
                className="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            {/* <div> */}
            <img src={braking} className="w-full pr-1" />
            {/* <p className="text-center text-xl font-medium mt-0">
                Braking Rotor Disk
              </p>
            </div> */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
              <a
                href="#slide2"
                className="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❮
              </a>
              <a
                href="#slide4"
                className="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            {/* <div> */}
            <img src={muffler} className="w-full" />
            {/* <p className="text-center text-xl font-medium mt-0">
                Catalytic Converters and Mufflers
              </p>
            </div> */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
              <a
                href="#slide3"
                className="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❮
              </a>
              <a
                href="#slide5"
                className="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            {/* <div> */}
            <img src={pistons} className="w-full" />
            {/* <p className="text-center text-xl font-medium mt-0">Sealing</p>
            </div> */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
              <a
                href="#slide4"
                className="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Banner;
