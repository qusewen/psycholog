import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Popap from "./component/Popap/Popap";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <Provider store={store}>

        <Header />
        <Popap />
        <App />
        <Footer />

    </Provider>
  </HashRouter>
);
