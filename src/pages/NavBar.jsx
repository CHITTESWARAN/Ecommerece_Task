import React, { useContext, useState, useEffect } from "react";
import {
  FaSearch,
  FaTimes,
  FaUser,
  FaBars,
  FaShoppingCart,
  FaFilter,
} from "react-icons/fa";
import { UserContext } from "../UserContent";

const NavBar = ({ setProducts }) => {
  const { cart, setcart, cartopen, setcartopen } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const fetchProducts = async (sortOrder) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products?sort=${sortOrder}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    fetchProducts(value);
  };

  return (
    <header className="w-full mb-2 bg-purple-200 xl:px-28 px-4 absolute top-0 right-0 left-0">
      <nav className="flex items-center justify-between container md:py-4 pt-6 pb-3">
        <a href="/">
          <img
            src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.56.2/images/header/primary-logo.svg"
            alt="Logo"
            className="w-24"
          />
        </a>

       
        <div className="hidden md:block lg:ml-2">
  <select className="w-full px-3 py-2 rounded-md bg-transparent text-black border border-transparent focus:outline-none text-sm font-semibold">
    <option value="select">Select Location</option>
    <option value="delhi">Delhi</option>
    <option value="mumbai">Mumbai</option>
    <option value="bangalore">Bangalore</option>
    <option value="chennai">Chennai</option>
  </select>
</div>


        {/* Search Bar */}
        <div className="flex md:flex items-center border-none w-[60%] rounded-md bg-white px-3 py-1">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search over 5000 Products"
            className="outline-none px-2 py-1 w-full bg-transparent"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="hidden md:flex items-center text-lg text-black ml-1 gap-2">
          <FaFilter className="text-xl" />
          <select
            className="border px-3 py-2 w-1 rounded-md"
            value={selectedOption}
            onChange={handleSortChange}
          >
            <option value="">Sort by</option>
            <option value="highToLow"> High to Low</option>
            <option value="lowToHigh">Low to High</option>
          </select>
        </div>

        {/* Cart Section */}
        <div onClick={() => setcartopen(true)} className="hidden md:flex text-lg text-black ml-0 cursor-pointer">
          <a href="/" className="flex items-center gap-2">
            <FaShoppingCart />
            Cart ({cart.length})
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-black" />
            ) : (
              <FaBars className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full px-4 py-3 absolute top-full left-0 shadow-md">
          <form className="mb-3">
            <select className="w-full border px-3 py-2 rounded-md">
              <option value="select">Select Location</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="chennai">Chennai</option>
            </select>
          </form>

          {/* Filter Button */}
          <button className="flex items-center gap-2 border px-3 py-2 rounded-md w-full hover:bg-gray-200">
            <FaFilter />
            Filter
          </button>

          {/* Cart Section */}
          <div className="mt-3">
            <a href="/" className="flex items-center gap-2">
              <FaShoppingCart />
              Cart ({cart.length})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;