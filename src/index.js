import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Temperature from "./pages/temperature/Temperature";
import Co2 from "./pages/co2/Co2";
import Methane from "./pages/methane/Methane";
import No2 from "./pages/no2/No2";
import Polar from "./pages/polar/Polar";
import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Temperature />
      </div>
    ),
  },
  {
    path: "/co2",
    element: (
      <div>
        <Co2 />
      </div>
    ),
  },
  {
    path: "/methane",
    element: (
      <div>
        <Methane />
      </div>
    ),
  },
  {
    path: "/no2",
    element: (
      <div>
        <No2 />
      </div>
    ),
  },
  {
    path: "/polar",
    element: (
      <div>
        <Polar />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
