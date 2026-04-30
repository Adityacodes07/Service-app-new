import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `relative transition duration-200 ${
      isActive
        ? "text-black font-semibold"
        : "text-gray-600 hover:text-black"
    }`;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          ServiceApp
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>

          <NavLink to="/my-bookings" className={navLinkStyle}>
            My Bookings
          </NavLink>
        </div>
        <NavLink to="/developer" className={navLinkStyle}>
          Developer
        </NavLink>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white shadow">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>

          <NavLink to="/my-bookings" className={navLinkStyle}>
            My Bookings
          </NavLink>

          <NavLink to="/developer" className={navLinkStyle}>
            Developer
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;