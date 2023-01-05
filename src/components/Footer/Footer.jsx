import React from "react";
import instagram from '../../assets/images/instagram.svg'
import linkedin from '../../assets/images/linkedin.svg'
import twitter from '../../assets/images/twitter.svg'
// import { MyForm } from "../Hero/Hero";

function Footer({ isOpen, handleClick }) {
  return (
    <footer id="contact" className="bg-[#100E1D] footer mt-10">
      <div className="container inner">
        <div className="md:flex justify-between items-start pt-[30px]">
          <ul className="menu-large text-md font-[400] justify-center gap-5 flex flex-col text-[#FFF]">
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
          <div className="socials mt-[55px] md:mt-0">
            <h2 className="text-white text-2xl font-extrabold">Edie</h2>
            <span className="flex align-middle gap-3 mt-2">
              <div className="socials-icon">
                <img src={instagram} alt="instagram logo" />
              </div>
              <div className="socials-icon">
                <img src={linkedin} alt="linkedin logo" />
              </div>
              <div className="socials-icon">
                <img src={twitter} alt="twitter logo" />
              </div>
            </span>
          </div>
          <div className="mt-[60px] md:mt-0">
            <label
              htmlFor="footer-email-input"
              className="text-[#828282] text-[12px] tracking-wide block pb-2"
            >
              Want us to contact you?
            </label>
            <div className="input-container bg-[#f2f2f2] rounded-md pl-4 px-2 py-2 min-w-[250px] w-[278px]">
              <form
                action=""
                className="flex justify-between items-center w-full"
              >
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-1/2 bg-[transparent] border-none outline-none"
                  id="footer-email-input"
                />
                <button className="bg-[#2D9CDB] py-[8px] px-[20px] text-[#f2f2f2] rounded-lg">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
        <p className="text-white text-center text-sm mt-24">
          created by <a href='https://twitter.com/davidcharlie371' target='_blank' className='cursor-pointer'>davidcharlie</a> - devChallenges.io
        </p>
      </div>
    </footer>
  );
}

export default Footer;
