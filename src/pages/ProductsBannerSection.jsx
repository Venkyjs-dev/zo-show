import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ProductsBannerSection() {
  const headingRef = useRef(null);
  const subTextRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    // Wrap each character in a span so we can animate them individually
    const splitChars = (el) => {
      const text = el.textContent;
      el.textContent = "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = "inline-block";
        el.appendChild(span);
      });
      return el.querySelectorAll("span");
    };

    const headingChars = splitChars(headingRef.current);
    const subChars = splitChars(subTextRef.current);

    const tl = gsap.timeline();
    tl.from(headingChars, {
      opacity: 0,
      y: 40,
      stagger: 0.04,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        subChars,
        {
          opacity: 0,
          y: 20,
          stagger: 0.03,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        btnRef.current,
        { opacity: 0, scale: 0.8, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.2"
      );
  }, []);

  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center 
                 px-4 sm:px-6 lg:px-8 text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
      }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-3xl">
        <p
          ref={subTextRef}
          className="text-orange-400 font-semibold tracking-wide mb-4 text-lg sm:text-xl md:text-2xl">
          India's Largest Screen Network Meets Life in Motion
        </p>

        <h1
          ref={headingRef}
          className="text-white font-extrabold text-3xl sm:text-5xl md:text-6xl leading-tight mb-6">
          Products Banner Section
        </h1>

        <button
          ref={btnRef}
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold 
                     px-6 py-3 rounded-lg shadow-lg transition-transform duration-200
                     hover:scale-105 focus:scale-95 focus:outline-none">
          Get Started
        </button>
      </div>
    </section>
  );
}
