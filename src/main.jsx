import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import ThankyouPage from "./ThankyouPage.jsx";
import PricingPage from "./PricingPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
