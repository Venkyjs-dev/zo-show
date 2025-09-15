import { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef(null);
  const emailRef = useRef(null);
  const callRef = useRef(null);

  // GSAP animations
  useGSAP(
    () => {
      const el = headerRef.current;

      // Fade-in + slide-down on scroll
      gsap.fromTo(
        el,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );

      // Email shake animation (jerk)
      gsap.to(emailRef.current, {
        scale: 1.2,
        rotate: 15,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        repeatDelay: 1.5,
      });

      // Call icon pulse + rotate animation
      gsap.to(callRef.current, {
        scale: 1.2,
        rotate: 15,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        repeatDelay: 1.5,
      });
    },
    { scope: headerRef }
  );

  return (
    <header
      ref={headerRef}
      className="hidden lg:flex justify-between items-center mx-auto px-6 py-3 max-w-6xl
                 bg-gradient-to-r from-amber-50 to-white rounded-b-2xl shadow-md
                 font-sans text-gray-700">
      {/* Left: Email */}
      <div className="flex items-center space-x-2 text-sm md:text-base">
        <MdOutlineEmail
          ref={emailRef}
          className="text-blue-600 text-2xl cursor-pointer"
        />
        <span className="font-medium">ask@zo-show.com</span>
      </div>

      {/* Right: Phone + Social */}
      <div className="flex items-center space-x-4 text-sm md:text-base">
        <div className="flex items-center space-x-2">
          <FiPhoneCall
            ref={callRef}
            className="text-blue-600 text-xl cursor-pointer"
          />
          <span className="font-medium">+91 720 777 9800</span>
        </div>

        <span className="text-gray-300">|</span>

        <div className="flex items-center space-x-3 text-blue-600 text-2xl">
          <SiFacebook className="hover:text-blue-800 transition-colors duration-300 cursor-pointer" />
          <FaLinkedin className="hover:text-blue-800 transition-colors duration-300 cursor-pointer" />
          <FaSquareInstagram className="hover:text-pink-500 transition-colors duration-300 cursor-pointer" />
          <FaSquareXTwitter className="hover:text-gray-800 transition-colors duration-300 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
