import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-gradient-to-br from-gray-900 to-black  h-screen text-white">
      <App />
    </div>
  </React.StrictMode>
);
