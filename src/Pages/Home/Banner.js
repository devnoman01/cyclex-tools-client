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
    <div class="hero max-w-6xl mx-auto">
      <div class="hero-content container mx-auto pt-10 pb-0 md:py-10 lg:py-12 flex-col lg:flex-row">
        <div className="w-full md:w-1/2">
          <h1 class="text-4xl lg:text-5xl font-bold">
            We manufacture world class car parts and components
          </h1>
          <p class="py-6 w-full text-justify font-medium md:text-left md:w-4/5">
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
        <div class="carousel w-full row md:w-1/2 my-20">
          <div id="slide1" class="carousel-item relative w-full">
            <div>
              <img src={shocks} class="w-full" />
              <p className="text-center text-xl font-medium mt-0">
                Shocks and Struts
              </p>
            </div>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
              <a
                href="#slide5"
                class="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❮
              </a>
              <a
                href="#slide2"
                class="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full">
            <div>
              <img src={steering} class="w-full" />
              <p className="text-center text-xl font-medium mt-0">
                Steering and Suspension
              </p>
            </div>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
              <a
                href="#slide1"
                class="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❮
              </a>
              <a
                href="#slide3"
                class="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" class="carousel-item relative w-full">
            <div>
              <img src={braking} class="w-full pr-1" />
              <p className="text-center text-xl font-medium mt-0">
                Braking Rotor Disk
              </p>
            </div>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
              <a
                href="#slide2"
                class="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❮
              </a>
              <a
                href="#slide4"
                class="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" class="carousel-item relative w-full">
            <div>
              <img src={muffler} class="w-full" />
              <p className="text-center text-xl font-medium mt-0">
                Catalytic Converters and Mufflers
              </p>
            </div>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
              <a
                href="#slide3"
                class="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❮
              </a>
              <a
                href="#slide5"
                class="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" class="carousel-item relative w-full">
            <div>
              <img src={pistons} class="w-full" />
              <p className="text-center text-xl font-medium mt-0">Sealing</p>
            </div>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
              <a
                href="#slide4"
                class="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
              >
                ❮
              </a>
              <a
                href="#slide1"
                class="btn btn-circle btn-sm bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
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
