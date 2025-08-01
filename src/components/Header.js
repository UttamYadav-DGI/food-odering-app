import { useContext, useState } from "react";
import { LOGO_CDN } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/24/outline"; // ✅ Tailwind Heroicons

const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  const status = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Redux cart items
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            className="w-40 transition-transform duration-300 group-hover:scale-105"
            src={LOGO_CDN}
            alt="App Logo"
          />
        </Link>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex items-center gap-8 text-gray-700 font-medium">
            
            {/* Online Status */}
            

            {/* Links */}
            <li className="hover:text-green-600 transition">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-green-600 transition">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-green-600 transition">
              <Link to="/grocery">Grocery</Link>
            </li>

            {/* Cart */}
            <li>
              <Link
                to="/cart"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-100 transition"
              >
                <ShoppingCartIcon className="w-6 h-6 text-green-600" />
                <span className="font-bold">
                  {cartItems.length}
                </span>
              </Link>
            </li>

            {/* Login Button */}
            <li>
              <button
                onClick={() => {
                  setLoginbtn(loginbtn === "Login" ? "Logout" : "Login");
                }}
                className="px-5 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 hover:shadow-lg transition-all"
              >
                {loginbtn}
              </button>
            </li>

            {/* Logged-in User */}
            <li className="text-gray-600 italic">{loggedInUser}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
