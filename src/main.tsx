import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SalesLayer from "./SalesLayer";
import "./styles.css";
import "./sales.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <SalesLayer />
  </React.StrictMode>,
);
