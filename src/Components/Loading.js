import React from "react";

const Loading = () => {
  return (
    <div>
      <div className=" flex justify-center items-center my-12">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
      </div>
    </div>
  );
};

export default Loading;
