import React, { useState, useEffect, useRef } from 'react';

const CartIcon = ({ itemCount = 0, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (onToggle) onToggle(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Cart Icon Button */}
      <button
        onClick={toggleDropdown}
        className="relative p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-200 mx-2 sm:mx-4"
        aria-label="Shopping Cart"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {/* Cart Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 sm:w-96 bg-white rounded-lg shadow-xl z-50 max-h-[80vh] overflow-y-auto">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Shopping Cart</h3>
              <button
                onClick={toggleDropdown}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="space-y-4">
              {/* Example Cart Item */}
              <div className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg">
                <img
                  src="https://via.placeholder.com/60"
                  alt="Product"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-800">Product Name</h4>
                  <p className="text-sm text-gray-500">$99.99</p>
                  <div className="flex items-center mt-1">
                    <button className="text-gray-500 hover:text-gray-700">-</button>
                    <span className="mx-2 text-sm">1</span>
                    <button className="text-gray-500 hover:text-gray-700">+</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart Footer */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-base font-medium text-gray-800">Total:</span>
                <span className="text-lg font-bold text-gray-900">$99.99</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartIcon; 