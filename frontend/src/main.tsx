import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.tsx";
import PotatePage from "../pages/PotatePage/PotatePage.tsx";
import PhonePage from "../pages/PhonePage/PhonePage.tsx";
import HeadphonesPage from "../pages/HeadphonesPage/HeadphonesPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/potate",
    element: <PotatePage />,
  },
  {
    path: "/phone",
    element: <PhonePage />,
  },
  {
    path: "/headphones",
    element: <HeadphonesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
