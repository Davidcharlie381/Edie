import React, { useState } from "react";

function SideBar({ isOpen, handleClick }) {
  return (
    <div
      className={`fixed ${
        isOpen ? "opacity-100 z-10" : "opacity-0 -z-10"
      } sidebar  h-screen w-screen overflow-hidden md:hidden justify-center bg-white flex py-24 transition-all duration-500`}
    >
      <div
        className="close absolute top-7 left-7 cursor-pointer"
        onClick={handleClick}
title="close"
      >
        <span className="block w-[25px] h-[3px] bg-[#333] rounded-sm rotate-45 origin-[40%]"></span>
        <span className="block w-[25px] h-[3px] bg-[#333] rounded-sm -rotate-45 origin-[40%]"></span>
      </div>
      <ul className="flex items-center gap-10 flex-col text-[#333] font-semibold">
        <li onClick={handleClick}>
          <a href="#home">Home</a>
        </li>
        <li onClick={handleClick}>
          <a href="#services">Services</a>
        </li>
        <li onClick={handleClick}>
          <a href="#works">Our Works</a>
        </li>
        <li onClick={handleClick}>
          <a href="#clients">Clients</a>
        </li>
        <li onClick={handleClick}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const body = document.body;

  isOpen
    ? body.classList.add("overflow-hidden")
    : body.classList.remove("overflow-hidden");

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <SideBar isOpen={isOpen} handleClick={handleClick} />
      <header className="flex justify-between items-center container">
        <nav>
          <h2 className="logo text-2xl font-extrabold">Edie</h2>
        </nav>
        <ul
          className="menu md:hidden grid place-content-center gap-[5px]"
          title="Menu"
          onClick={handleClick}
        >
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul className="menu-large hidden justify-center items-center md:flex text-[#333]">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#works">Our Works</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
