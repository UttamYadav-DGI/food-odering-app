import React from "react";

const Shimmer = () => {
  const shimmerCount = 20; // number of shimmer cards

  return (
    <div className="flex flex-wrap gap-4 p-5">
      {Array.from({ length: shimmerCount }).map((_, index) => (
        <div
          key={index}
          className="w-48 h-28 rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
