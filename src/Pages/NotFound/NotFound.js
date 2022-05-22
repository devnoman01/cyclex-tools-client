import React from "react";

const NotFound = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="container mx-auto text-center">
        <img
          className="text-center mx-auto w-80 sm:w-1/2 lg:w-3/6"
          src="https://img.freepik.com/free-vector/error-abstract-concept-illustration-error-webpage-browser-download-failure-page-found-server-request-unavailable-website-communication-problem_335657-938.jpg"
          alt=""
        />
        <h1 className="text-7xl md:text-9xl text-[#DC2626] font-semibold text-center mb-3">
          404
        </h1>
        <h1 className="text text-3xl">Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
