import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Portfolio from "../Portfolio/Portfolio";
import Blog from "../Blog/Blog";
import About from "../About/About";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);