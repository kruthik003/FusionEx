import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/routes";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={Router}>
    <App />
  </RouterProvider>
);
