import React from "react";
import person4 from "../../assets/images/person4.png";

function Clients() {
  return (
    <section className="client mt-12 container inner md:inner">
      <p className="leading-9 text-[20px] tracking-wider font-[500] md:max-w-[500px] lg:max-w-[900px]">
        “Fast and outstanding results. Edie understands their customer’s needs.
        They have a young and talented team.”
      </p>
      <div className="details mt-5 flex gap-3 items-center">
        <img
          src={person4}
          alt="Happy client"
          className="h-12 w-12 rounded-md"
        />
        <div className="details-name">
          <h4 className="leading-9 text-[18px] tracking-wider font-[500]">
            Carlos Tran
          </h4>
          <p className="font-normal text-[#4f4f4f] md:max-w-[312px] text-base leading-[2] tracking-wide">
            The Decorate Gatsby
          </p>
        </div>
      </div>
    </section>
  );
}

export default Clients;
