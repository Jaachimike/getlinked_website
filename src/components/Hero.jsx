import React from "react";

const Hero = () => {
  return (
    <div className=" bg-[#150E28] h-[90dvh]">
      {/* CONTAINER DIV  */}
      <div>
        {/* LEFT CONTAINER */}
        <div>
          <h2>
            getlinked Tech Hackathon <span>1.0</span> 🔗💥
          </h2>

          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big Prize
          </p>

          {/* REGISTER BUTTON */}
          <div className=" inline-block px-6 py-1 bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
            <button>Register</button>
          </div>

          {/* COUNTDOWN TIMER */}
          <div className=" flex space-x-3">
            {/* HOURS */}
            <h2>
              00 <sub>H</sub>
            </h2>
            {/* MINUTES */}
            <h2>
              00 <sub>M</sub>
            </h2>
            {/* SECONDS */}
            <h2>
              00 <sub>S</sub>
            </h2>
          </div>
        </div>

        {/* RIGHT CONTAINER */}
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
