import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer3 = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-orange-50 text-black w-full font-sans py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold">SWAGGIN</h3>
            <p className="mt-2 text-sm text-gray-400">
              Quality clothing that combines style, comfort, and sustainability.
            </p>
            <div className="flex mt-4 space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-full hover:bg-gray-600"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-full hover:bg-gray-600"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-full hover:bg-gray-600"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* SHOP and HELP side by side only on large screens */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Shop Links */}
            <div>
              <h3 className="text-lg font-semibold">SHOP</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Women
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Men
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Accessories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Sale
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h3 className="text-lg font-semibold">HELP</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Customer Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Returns & Exchanges
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold">SUBSCRIBE</h3>
            <p className="mt-2 text-sm text-gray-400">
              Get updates on new products and sales.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 rounded-l-md bg-gray-800 border-none text-sm text-white focus:outline-none"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <button
                type="submit"
                className="bg-orange-500 px-4 rounded-r-md text-white font-semibold hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-wrap justify-center text-sm text-black">
          <span>© 2025 SWAGGIN. All Rights Reserved.</span>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-900">
              Terms
            </a>
            <a href="#" className="hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-900">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
