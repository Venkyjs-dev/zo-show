import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  // Animate footer fade-in on scroll
  useGSAP(
    () => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="bg-blue-950 text-white px-4 py-8 lg:px-[5%] lg:py-12 font-sans">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="lg:w-[45%]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
            Let's get your brand to the big screens!
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-6">
            Lead your brand with India's premier Digital Screen Network. Get in
            touch with our experts to start your urban advertising journey.
          </p>

          {/* Contact Form */}
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full md:w-1/2 p-2 rounded bg-blue-700/80 placeholder-gray-200
                           focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full md:w-1/2 p-2 rounded bg-blue-700/80 placeholder-gray-200
                           focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full md:w-1/2 p-2 rounded bg-blue-700/80 placeholder-gray-200
                           focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="City*"
                className="w-full md:w-1/2 p-2 rounded bg-blue-700/80 placeholder-gray-200
                           focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <select
              className="w-full p-2 rounded bg-blue-700/80 placeholder-gray-200
                         focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>--- Select ---</option>
              <option>Brand</option>
              <option>Agency</option>
              <option>Others</option>
            </select>
            <textarea
              placeholder="Comments*"
              className="w-full p-2 rounded bg-blue-700/80 placeholder-gray-200
                         focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              className="bg-green-600 hover:bg-green-500 transition-colors duration-300
                         px-6 py-3 rounded font-bold">
              Send
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="lg:w-[50%] flex flex-col gap-8">
          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row justify-between gap-8 text-gray-200">
            <div>
              <h2 className="font-bold text-xl mb-2">Zo-Show</h2>
              <p>Your Digital Screen Network partner</p>
            </div>
            <ul className="space-y-1">
              <li className="hover:text-green-500 cursor-pointer">Home</li>
              <li className="hover:text-green-500 cursor-pointer">About Us</li>
              <li className="hover:text-green-500 cursor-pointer">
                Our Products
              </li>
            </ul>
            <ul className="space-y-1">
              <li className="hover:text-green-500 cursor-pointer">Career</li>
              <li className="hover:text-green-500 cursor-pointer">Culture</li>
              <li className="hover:text-green-500 cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h2 className="font-bold text-xl mb-2">
              Sign Up for Our Newsletter
            </h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded bg-transparent border border-gray-400
                         placeholder-gray-200 focus:outline-none
                         focus:ring-2 focus:ring-green-500"
            />
            <button
              className="mt-3 bg-green-600 hover:bg-green-500 transition-colors duration-300
                         px-6 py-3 rounded font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <div className="text-gray-400 text-sm text-center lg:text-left">
        &copy; {new Date().getFullYear()} Zo-Show. All rights reserved.
      </div>
    </footer>
  );
}
