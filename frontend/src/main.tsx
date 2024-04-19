import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.tsx";
import PotatePage from "../pages/PotatePage/PotatePage.tsx";
import PhonePage from "../pages/PhonePage/PhonePage.tsx";
import HeadphonesPage from "../pages/HeadphonesPage/HeadphonesPage.tsx";
//Delete DBTestPage
import DBTestPage from "../pages/DBTestPage/DBTestPage.tsx";

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
  //Delete DBTestPage
  {
    path: "/dbtest",
    element: <DBTestPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
