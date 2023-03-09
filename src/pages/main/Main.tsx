import React from "react";
import About from "../../component/sections/About";
import Groupe from "../../component/sections/Groupe";

import "./Main.scss";
export default function Main() {
  return (
    <main className='main'>
      <About/>
      <Groupe/>
    </main>
  );
}
