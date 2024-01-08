import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Update from "./Update.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Update/:idParam" element={<Update></Update>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
