import React from "react";
import person1 from "../../assets/images/person1.png";
import person2 from "../../assets/images/person2.png";
import person3 from "../../assets/images/person3.png";

function Gallery() {
  return (
    <div className="gallery mt-10 h-[300px] lg:h-[500px] md:w-2/4 md:max-w-[580px] max-w-[340px] p-12 grid place-content-center relative">
      <img
        src={person3}
        alt=""
        className="rounded-3xl block absolute h-[155px] w-[155px] lg:h-[260px] lg:w-[260px] top-[60px] md:top-24 left-0 md:left-[25px]"
        loading="lazy"
      />
      <img
        src={person1}
        alt=""
        className="rounded-3xl block absolute h-[120px] w-[145px] lg:h-[230px] lg:w-[240px] right-5"
        loading="lazy"
      />
      <img
        src={person2}
        alt=""
        className="rounded-3xl block absolute h-[170px] w-[165px] lg:h-[250px] lg:w-[260px] bottom-0 right-0"
        loading="lazy"
      />
    </div>
  );
}

function Team() {
  return (
    <section className="container " id="clients">
      <div className="mt-10 md:inner team md:flex md:justify-center xl:gap-12 xl:justify-around items-center">
        <div className="team-desc">
          <p className="text-[#EB5757] tracking-wider text-[12px] leading-4 pt-10 pb-2">
            Meet the team
          </p>
          <h1 className="leading-9 text-[24px] max-w-[312px] tracking-wider font-[500] md:max-w-[312px]">
            We are a chilled and laidback team
          </h1>
          <p className="font-normal text-[#4f4f4f] md:max-w-[312px] text-base leading-[2] tracking-wide pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <Gallery />
      </div>
    </section>
  );
}

export default Team;
