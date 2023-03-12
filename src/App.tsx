import React, { useEffect } from "react";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./pages/main/Main";
import Pay from "./pages/pay/Pay";
import Contact from "./pages/contact/Contact";
import Treaty from "./pages/treaty/Treaty";
function App() {
  const useScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  useScrollToTop();
  return (
    <Routes>
      <Route path='/main' element={<Main />} />
      <Route path='/pay' element={<Pay />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/treaty' element={<Treaty />} />
    </Routes>
  );
}

export default App;
