import { useEffect } from "react";
import { useRouteError, Link } from "react-router-dom";
import { gsap } from "gsap";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6">
      <div className="error-container text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-red-600 drop-shadow-sm">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
          Oops! Page not found.
        </h2>

        <p className="mt-3 text-base md:text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
          Sorry, we couldn’t find the page you’re looking for
          {error?.statusText || error?.message
            ? ` (${error.statusText || error.message})`
            : ""}
          .
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
