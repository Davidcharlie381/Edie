import React from "react";
import heroImage from "../../assets/images/heroImage.jpg";

// function MyForm() {
//   return (

//   );
// }

function Hero() {
  return (
    <section id="home">
      <div className="container innner">
        <p className="text-[#2D9CDB] tracking-wider text-[12px] leading-4 pt-5 pb-2">
          Unhappy with your website?
        </p>
        <h1 className="leading-9 text-[24px] max-w-[312px] tracking-wider font-[500] md:max-w-[312px]">
          We create beautiful and fast web services
        </h1>
      </div>
      <div className="container h-[160px] md:h-[245px] overflow-hidden">
        <img src={heroImage} alt="" className="h-full w-full rounded-[20px]" />
      </div>
      <div className="container innner">
        <h1 className="leading-9 text-[24px] tracking-wider font-[500] max-w-[192px]">
          Story, emotion and purpose
        </h1>
        <p className="font-normal text-[#4f4f4f] md:max-w-[312px] text-base leading-[2] tracking-wide pt-5">
          We help transform your ideas into real world applications that will
          outperform your toughest competition and help you achieve your
          strategic goals in short period of time.
        </p>
      </div>
      <div className="container innner">
        <label
          htmlFor="email-input"
          className="text-[#828282] text-[12px] tracking-wide block pb-2"
        >
          Want us to contact you?
        </label>
        <div className="input-container bg-[#f2f2f2] rounded-md pl-4 px-2 py-2 w-[308px]">
          <form action="" className="flex justify-between items-center w-full">
            <input
              type="email"
              required
              placeholder="Email"
              className="w-1/2 bg-[transparent] border-none outline-none"
              id="email-input"
            />
            <button className="bg-[#2D9CDB] py-[8px] px-[20px] text-[#f2f2f2] rounded-lg">
              Join
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// export { Hero, MyForm };

export default Hero;
