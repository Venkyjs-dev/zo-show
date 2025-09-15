import App from "../App";
import About from "../pages/About";
import ErrorPage from "./ErrorPage";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
const routes = [
  {
    path: "/",
    element: <App />, // layout wrapper
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/products", element: <Products /> },
      //   {
      //     path: "/dashboard",
      //     element: <Dashboard />,
      //     children: [
      //       { path: "profile", element: <Profile /> },
      //       { path: "settings", element: <Settings /> },
      //     ],
      //   },
    ],
  },
];

export default routes;
