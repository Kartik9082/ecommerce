import React from "react";

const ShimmerCard = () => (
  <div className="flex flex-wrap gap-4 mt-5 w-full justify-center">
    {Array(20)
      .fill("")
      .map((e, index) => (
        <div
          key={index}
          className="w-[360px] h-[360px] bg-gray-300 rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300 relative"
        >
          {/* Shimmer effect for the image */}
          <div className="animate-shimmer h-2/3 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 absolute top-0 left-0 right-0"></div>

          {/* Card content goes here */}
          <div className="p-4">
            {/* Shimmer effect for the title */}
            <div className="animate-shimmer h-4 w-2/3 mb-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300"></div>

            {/* Shimmer effect for the description */}
            <div className="animate-shimmer h-3 w-5/6 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 mb-2"></div>

            {/* Shimmer effect for the image */}
            <div className="animate-shimmer h-40 w-full mb-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300"></div>

            {/* Shimmer effect for the paragraph */}
            <div className="animate-shimmer h-3 w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300"></div>
          </div>
        </div>
      ))}
  </div>
);

export default ShimmerCard;
