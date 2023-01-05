import React from "react";
import booking from "../../assets/images/booking.png";
import onboard from "../../assets/images/onboard.png";
import smarthome from "../../assets/images/smarthome.jpg";
import juiceProduct from "../../assets/images/juice-product.png";

function Work({ category, title, image }) {
  return (
    <div
      className={`work mt-8 md:even:-mt-[25px] mx-auto grid place-content-center`}
    >
      <div className="work-image overflow-hidden h-[350px] md:h-[300px] md:w-[300px] w-[350px] mx-auto">
        <img src={image} alt={title} className="rounded-2xl h-full w-full" />
      </div>
      <span className="block text-[#828282] text-[12px] tracking-wide py-2">
        {category}
      </span>
      <h4 className="font-[500]">{title}</h4>
    </div>
  );
}

function Works() {
  return (
    <section id="works">
      <div className="container inner">
        <h2 className="text-[22px] font-[500] leading-9 tracking-widest max-w-[292px] pt-[80px]">
          Good design means good business
        </h2>
      </div>
      <div className="works container mt-[40px] md:place-content-center md:grid md:grid-rows-2 md:grid-cols-2">
        <Work
          category="Full stack application"
          image={smarthome}
          title="Smart home dashboard"
        />
        <Work
          category="UI/UX design"
          image={onboard}
          title="Onboard application"
        />
        <Work
          category="Mobile application"
          image={booking}
          title="Booking system"
        />
        <Work
          category="Front end application"
          image={juiceProduct}
          title="Juice product homepage"
        />
      </div>
      <div className="see-more container md:text-right md:-ml-[25px] md:-mt-[55px]">
        <span className="text-[#2D9CDB]">
          see more{" "}
          <span className="material-symbols-sharp text-[#2D9CDB] align-middle">
            trending_flat
          </span>
        </span>
      </div>
    </section>
  );
}

export default Works;
