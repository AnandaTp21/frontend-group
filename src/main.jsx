import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MainDataContextFunc from "./Context/Maindata.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainDataContextFunc>
    <App />
    </MainDataContextFunc>
  </BrowserRouter>
);
