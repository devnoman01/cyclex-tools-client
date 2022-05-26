import React from "react";
import { faFlag, faShop, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BusinessSummary = () => {
  return (
    <div className="max-w-6xl mx-auto w-full lg:px-0">
      <div className="container mx-auto w-full py-8 lg:py-20 px-4 lg:px-0">
        <h1 className="text-center text-4xl md:text-5xl font-medium mb-16 text-primary">
          Business Summary
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="w-full flex flex-col justify-center py-3">
            <FontAwesomeIcon
              className="text-8xl text-sky-600 my-8"
              icon={faFlag}
            />
            <h2 className="text-5xl text-center font-bold my-3">30</h2>
            <h4 className="text-2xl pb-5 font-medium  text-center">
              Countries
            </h4>
          </div>
          <div className="w-full flex flex-col justify-center py-3">
            <FontAwesomeIcon
              className="text-8xl text-sky-600 my-8"
              icon={faShop}
            />
            <h2 className="text-5xl text-center font-bold my-3">10K+</h2>
            <h4 className="text-2xl pb-5 font-medium  text-center">
              Great Suppliers
            </h4>
          </div>
          <div className="w-full flex flex-col justify-center py-3">
            <FontAwesomeIcon
              className="text-8xl text-sky-600 my-8"
              icon={faUsers}
            />
            <h2 className="text-5xl text-center font-bold my-3">10M+</h2>
            <h4 className="text-2xl pb-5 font-medium  text-center">
              Happy Customer
            </h4>
          </div>
          <div className="w-full flex flex-col justify-center py-3">
            <FontAwesomeIcon
              className="text-8xl text-sky-600 my-8"
              icon={faFlag}
            />
            <h2 className="text-5xl text-center font-bold my-3">3M+</h2>
            <h4 className="text-2xl pb-5 font-medium  text-center">Feedback</h4>
          </div>
        </div>
        <div className="w-full border border-2 border-sky-600 rounded-lg shadow-md px-4 py-8 mt-20 mb-10">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center items-center lg:py-4">
            <div className="row text-center lg:text-left">
              <h1 className="text-2xl lg:text-2xl font-bold mb-4 text-sky-700">
                Have any query about business or products?
              </h1>
              <p className="font-medium lg:text-xl">
                Feel free to contact anytime through any medium
              </p>
            </div>
            <div className="mt-10 flex gap-3 lg:mt-0 text-center">
              <button className="btn btn-primary text-white">
                Request For Quote
              </button>
              <button className="btn btn-accent text-white">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
