import React from "react";
import ReactDOM from "react-dom/client";
import {  BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import Header from "./component/Header/Header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
