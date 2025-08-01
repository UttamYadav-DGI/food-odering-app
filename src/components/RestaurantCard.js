import { IMG_CDN } from "../utils/constant";
import { Link } from "react-router"; // ✅ Correct import

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData;

  return (
    <div className="w-64 m-4 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300">
      {/* Restaurant Image */}
      <img
        className="w-full h-40 object-cover"
        src={IMG_CDN + cloudinaryImageId}
        alt={name}
      />

      {/* Card Content */}
      <div className="p-4 text-gray-800">
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <p className="text-sm text-gray-500 truncate">{cuisines?.join(", ")}</p>

        <div className="flex justify-between items-center mt-2 text-sm font-medium">
          {/* Rating */}
          <span
            className={`px-2 py-1 rounded-md text-white text-xs ${
              avgRating >= 4
                ? "bg-green-500"
                : avgRating >= 3
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          >
            ⭐ {avgRating}
          </span>

          {/* Cost */}
          <span className="text-gray-700">{costForTwo}</span>
        </div>

        {/* Delivery Time */}
        <p className="mt-1 text-xs text-gray-500">
          🚚 {sla?.deliveryTime} mins
        </p>
      </div>
    </div>
  );
};

export { RestaurantCard };
