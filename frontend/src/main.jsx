import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PotatePage from "./pages/PotatePage.jsx";
import PhonePage from "./pages/PhonePage.jsx";
import HeadphonesPage from "./pages/HeadphonesPage.jsx";

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
