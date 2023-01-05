import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Team from "./components/Team/Team";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const body = document.body;

  isOpen
    ? body.classList.add("overflow-hidden")
    : body.classList.remove("overflow-hidden");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Works />
      <Team />
      <Clients />
      <Footer isOpen={isOpen} handleClick={handleClick} />
    </>
  );
}

export default App;
