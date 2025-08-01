import { useEffect, useState, useRef, useCallback } from "react";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router"; // ✅ corrected import

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const observerTarget = useRef(null);

  // Fetch restaurants from Swiggy API
  const fetchRestaurants = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&offset=${offset}`
      );
      const json = await res.json();
      const newRestaurants =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      // Append without duplicates
      setRestaurants((prev) => {
        const ids = new Set(prev.map((r) => r.info.id));
        const uniqueNew = newRestaurants.filter((r) => !ids.has(r.info.id));
        return [...prev, ...uniqueNew];
      });
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    } finally {
      setLoading(false);
    }
  }, [offset]);

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setOffset((prev) => prev + 20);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) observer.observe(observerTarget.current);

    return () => {
      if (observerTarget.current) observer.unobserve(observerTarget.current);
    };
  }, [loading]);

  return (
    <div className="mx-10">
      <div className="flex flex-wrap justify-center">
        {restaurants.length === 0 && !loading ? (
          <Shimmer />
        ) : (
          restaurants.map((res, index) => (
            <Link
              to={`/restaurantMenu/${res.info.id}`}
              key={`${index}`} // ✅ unique key
            >
              <RestaurantCard resData={res.info} />
            </Link>
          ))
        )}
      </div>

      <div ref={observerTarget} className="text-center py-6">
        {loading && <p className="text-gray-500">Loading more restaurants...</p>}
      </div>
    </div>
  );
};

export default Body;
