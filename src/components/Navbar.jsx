import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-amber-50 px-4 py-3 md:mx-[10%] lg:mx-[15%] rounded shadow">
      <h1 className="text-xl font-bold">Zo-Show</h1>

      <ul className="hidden md:flex space-x-6">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/products">Our Products</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {open && (
        <ul className="font-bold absolute top-14 left-0 w-full bg-white flex flex-col px-2 space-y-4 py-4 md:hidden ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/products">Our Products</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
