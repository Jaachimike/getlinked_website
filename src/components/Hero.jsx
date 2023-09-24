import React from "react";
import man_svg from "../images/man-wearing-smart-glasses-touching-virtual-screen 1.svg";
import globe_svg from "../images/hero_svg.svg";

const Hero = () => {
  return (
    <section className="bg-[#150E28] pt-6 border-solid border-b-[1px] border-white border-opacity-20">
      <div className="  max-w-7xl mx-auto ">
        {/* CONTAINER DIV  */}
        <div className=" flex items-center">
          {/* LEFT CONTAINER */}
          <div>
            <h2 className=" text-4xl">getlinked Tech</h2>
            <h2 className=" text-4xl">
              Hackathon
              <span className=" text-[#D434FE]">1.0</span> 🔗💥
            </h2>

            <p className=" mb-8">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>

            {/* REGISTER BUTTON */}
            <div className=" mb-16 inline-block  px-10 py-3  rounded bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
              <button>Register</button>
            </div>

            {/* COUNTDOWN TIMER */}
            <div className=" text-5xl flex space-x-3">
              {/* HOURS */}
              <h2>
                00 <sub className=" text-sm">H</sub>
              </h2>
              {/* MINUTES */}
              <h2>
                00 <sub className=" text-sm">M</sub>
              </h2>
              {/* SECONDS */}
              <h2>
                00 <sub className=" text-sm">S</sub>
              </h2>
            </div>
          </div>

          {/* RIGHT CONTAINER */}
          <div className=" relative">
            <h2 className=" text-3xl text-center">
              Igniting a Revolution in HR Innovation
            </h2>
            <img src={man_svg} alt="" srcset="" className=" opacity-40" />
            <img
              src={globe_svg}
              alt=""
              srcset=""
              className=" absolute top-0 left-0 opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
