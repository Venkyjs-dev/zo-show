import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      <h1 className="text-6xl font-extrabold text-red-600">404</h1>
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
        Oops! Page not found.
      </h2>
      <p className="mt-2 text-gray-600 max-w-md">
        Sorry, we couldn’t find the page you’re looking for.
        {error?.statusText || error?.message
          ? ` (${error.statusText || error.message})`
          : ""}
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        Go Back Home
      </Link>
    </div>
  );
}
