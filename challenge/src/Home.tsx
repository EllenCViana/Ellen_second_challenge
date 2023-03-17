import React from "react";
import "./Home.css";
import Header from "./components/pagHome/Header";
import ImagemLogoUOL from "./components/backgroundImage/ImagemLogoUOL";
import AddCards from "./components/pagHome/AddCards";


function Pag_03() {
  return (
    <main id="pag_03">
      
      <Header />
      <AddCards />    
      <ImagemLogoUOL />     
    </main>
  );
}

export default Pag_03;
