import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import A3Evidence from "./A3Evidence";
import SalesLayer from "./SalesLayer";
import "./styles.css";
import "./sales.css";
import "./a3-evidence.css";
import "./pending-links.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <A3Evidence />
    <SalesLayer />
  </React.StrictMode>,
);
