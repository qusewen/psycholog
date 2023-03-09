import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Pay from "./pages/pay/Pay";
import Contact from "./pages/contact/Contact";
import Treaty from "./pages/treaty/Treaty";
function App() {
  return (

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/pay' element={<Pay />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/treaty' element={<Treaty />} />
      </Routes>

  );
}

export default App;
