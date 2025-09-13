import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />, // layout wrapper
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      //   { path: "/contact", element: <Contact /> },
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
