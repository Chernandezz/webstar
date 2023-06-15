import { useState } from "react";
import Header from "./UI/Header";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
// import Habilidades from "./components/Habilidades";
// import Contacto from "./components/Contacto";
// import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      {/* <SobreMi /> */}
      {/* <Habilidades /> */}
      <Proyectos />
      {/* <Contacto />
      <Footer /> */}
    </>
  );
}

export default App;
