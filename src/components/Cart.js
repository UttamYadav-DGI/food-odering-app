import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { IMG_CDN } from "../utils/constant";
import ItemList from "./ItemList"; // For restaurant menu styling

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Separate grocery and restaurant items
  const groceryItems = cartItems.filter((item) => item?.variations);
  const restaurantItems = cartItems.filter((item) => !item?.variations);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">🛒 My Cart</h1>
          {cartItems.length > 0 && (
            <button
              onClick={handleClearCart}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow"
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg">Your cart is empty 🛍️</p>
          </div>
        ) : (
          <>
            {/* Grocery Items */}
            {groceryItems.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">
                  🥦 Grocery Items
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
                  {groceryItems.map((item, idx) => (
                    <div
                      key={`grocery-${idx}`}
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
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Restaurant Items */}
            {restaurantItems.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold mb-4 text-orange-700">
                  🍽️ Restaurant Items
                </h2>
                <div className="bg-white p-4 rounded-lg shadow">
                  <ItemList key="restaurant-cart" data={restaurantItems} />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
