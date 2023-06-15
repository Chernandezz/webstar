import { useState } from "react";
import Header from "./UI/Header";
import Reserva from "./components/Reserva";
import Proyectos from "./components/Proyectos";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Reserva />
      <Proyectos />
    </>
  );
}

export default App;
