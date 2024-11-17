import React from "react";
import ReactDOM from "react-dom/client"; // Correct ReactDOM import for React 18
import App from "./App";
import "./index.css"; // Optional, for global styles

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root instance
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
