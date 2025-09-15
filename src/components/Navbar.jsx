import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const tl = useRef(null);
  const navigate = useNavigate();
  const pageRef = useRef(document.getElementById("page-wrapper"));
  const confettiContainer = useRef(null);
  const logoRef = useRef(null);

  // GSAP timeline for mobile menu
  useEffect(() => {
    tl.current = gsap.timeline({ paused: true }).fromTo(
      menuRef.current,
      { height: 0, opacity: 0 },
      {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      }
    );
  }, []);

  useEffect(() => {
    if (open) tl.current.play();
    else tl.current.reverse();
  }, [open]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/products", label: "Our Products" },
    { to: "/contact", label: "Contact" },
  ];

  // Added `cursor-pointer`
  const linkClasses = ({ isActive }) =>
    `block px-4 py-3 text-sm font-medium transition-colors duration-200 transform
     hover:-translate-y-0.5 active:translate-y-0.5 cursor-pointer
     ${
       isActive
         ? "text-green-700 bg-green-100"
         : "text-gray-700 hover:text-green-700 hover:bg-green-50"
     }`;

  // Animate page out/in before navigation
  const handleNavClick = (to) => {
    if (pageRef.current) {
      gsap.to(pageRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          navigate(to);
          gsap.fromTo(
            pageRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
          );
        },
      });
    } else {
      navigate(to);
    }
    setOpen(false);
  };

  // Confetti burst when clicking the logo
  const handleLogoClick = () => {
    const colors = ["#f87171", "#34d399", "#60a5fa", "#fbbf24", "#a78bfa"];
    const container = confettiContainer.current;

    for (let i = 0; i < 30; i++) {
      const piece = document.createElement("div");
      piece.className = "absolute w-2 h-2 rounded-full pointer-events-none";
      piece.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      piece.style.top = "50%";
      piece.style.left = "50%";
      container.appendChild(piece);

      const angle = Math.random() * Math.PI * 2;
      const distance = 200 + Math.random() * 200;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      gsap.to(piece, {
        x,
        y,
        scale: 0.5 + Math.random(),
        rotation: Math.random() * 720,
        opacity: 0,
        duration: 1.2 + Math.random() * 0.8,
        ease: "power2.out",
        onComplete: () => piece.remove(),
      });
    }

    navigate("/"); // redirect to home
  };

  return (
    <>
      {/* Full-page container for confetti */}
      <div
        ref={confettiContainer}
        className="fixed inset-0 pointer-events-none overflow-visible z-[9999]"
      />

      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">
          {/* Logo with burst effect */}
          <button
            ref={logoRef}
            onClick={handleLogoClick}
            className="text-2xl font-bold text-green-700 relative cursor-pointer">
            Zo-Show
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <button
                  onClick={() => handleNavClick(link.to)}
                  className={linkClasses({ isActive: false })}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle menu"
            className="md:hidden text-gray-700 hover:text-green-700 transition-colors">
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className="md:hidden overflow-hidden bg-white shadow-inner divide-y divide-gray-200"
          style={{ height: 0, opacity: 0 }}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <button
                  onClick={() => handleNavClick(link.to)}
                  className={linkClasses({ isActive: false })}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
