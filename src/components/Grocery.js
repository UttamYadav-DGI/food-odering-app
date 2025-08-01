import React, { useEffect, useState, useRef, useCallback } from "react";
import { IMG_CDN } from "../utils/constant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const GroceryPage = () => {

  const dispatch=useDispatch();

const handleCart=(item)=>{
  return dispatch(addItem(item));
}
  const [resInfo, setResInfo] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const observerTarget = useRef(null);

  // Fetch grocery data
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `https://www.swiggy.com/api/instamart/category-listing?categoryName=Fresh%20Vegetables&storeId=&offset=${offset}&filterName=&primaryStoreId=&secondaryStoreId=&taxonomyType=`
      );
      const jsonData = await data.json();

      const groceryItems = jsonData?.data?.widgets?.[1]?.data || [];

      // Append new groceries to the list
      setResInfo((prev) => [...prev, ...groceryItems]);
    } catch (error) {
      console.error("Error fetching grocery data:", error);
    } finally {
      setLoading(false);
    }
  }, [offset]);

  // Initial + paginated fetch
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // IntersectionObserver for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setOffset((prev) => prev + 20); // Load next 20 items
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [loading]);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            🛒 Fresh Groceries
          </h1>
          <span className="text-gray-500 text-sm">
            Showing {resInfo.length} items
          </span>
        </div>

        {/* Grocery List */}
        {!resInfo.length && !loading ? (
          <Shimmer />
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {resInfo.map((item) => (
              <div
                key={item?.variations?.[0]?.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center border border-gray-100 hover:border-green-400"
              >
                {/* Product Image */}
                <img
                  src={IMG_CDN + item?.variations?.[0]?.images?.[0]}
                  alt={item?.display_name}
                  className="w-36 h-36 object-contain mb-4 transition-transform duration-300 hover:scale-105"
                />

                {/* Product Name */}
                <h2 className="text-lg font-semibold text-gray-800 text-center line-clamp-2">
                  {item?.display_name}
                </h2>

                {/* Price */}
                <p className="text-green-600 font-bold mt-2 text-lg">
                  ₹{item?.variations?.[0]?.price?.mrp}
                </p>

                {/* Add to Cart Button */}
                <button className="mt-4 px-5 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 hover:shadow-lg transition-all"
                  onClick={()=>(handleCart(item))}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Loader for Infinite Scroll */}
        <div ref={observerTarget} className="text-center py-6">
          {loading && (
            <p className="text-gray-500 animate-pulse">
              Loading more items...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroceryPage;
