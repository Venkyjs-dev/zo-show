import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? "text-blue-600 font-bold" : "text-gray-700";

  return (
    <nav className="flex gap-4 bg-white shadow p-4">
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/about" className={linkClass}>
        About
      </NavLink>
      <NavLink to="/contact" className={linkClass}>
        Contact
      </NavLink>
      <NavLink to="/dashboard" className={linkClass}>
        Dashboard
      </NavLink>
    </nav>
  );
}
