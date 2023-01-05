import React from "react";

function Service({ heading, text, icon, bg }) {
  return (
    <div className="service hover:shadow-[0px_10px_30px_rgba(51,51,51,0.1)] p-8 mb-20 rounded-2xl transition-[box_shadow] duration-700">
      <span
        className={`service-icon bg-[${bg}] grid place-content-center h-10 w-10 rounded-xl mb-9`}
      >
        {icon}
      </span>
      <h3 className="service-head font-[700] text-[24px] pb-6">{heading}</h3>
      <p className="service-content text-[#4f4f4f] font-normal text-base leading-[2] tracking-wide mb-[30px]">
        {text}
      </p>
      <button className="bg-[#E0E0E0] py-2 px-3 rounded-lg text-[#828282] font-[500] hover:text-white hover:bg-[#2D9CDB] transition-all duration-700">
        Get started
      </button>
    </div>
  );
}

function Services() {
  return (
    <section id="services">
      <div className="container inner">
        <h2 className="text-[22px] font-[500] leading-9 tracking-widest max-w-[292px] pt-24">
          We offer high demand services
        </h2>
      </div>
      <div className="container inner services pt-[80px] md:flex md:gap-5 md:items-center md:justify-between">
        <Service
          heading="UI/UX Design"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
          icon={
            <span className="material-symbols-outlined text-white">edit</span>
          }
          bg={"#27AE60"}
          // bg={"#2D9CDB"}
        />
        <Service
          heading="Front end"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
          icon={
            <span className="material-symbols-outlined text-white">code</span>
          }
          // bg={"#27AE60"}
          bg={"#2D9CDB"}
        />
        <Service
          heading="Back end"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
          icon={
            <span className="material-symbols-outlined text-white">
              database
            </span>
          }
          bg={"#EB5757"}
          // bg={'#27AE60'}
        />
      </div>
    </section>
  );
}

export default Services;
