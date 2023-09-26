import React from "react";
import trophy from ".././images/prize_trophy.svg";
import medals from ".././images/prize_medals.svg";

const Prices = () => {
  return (
    <section className=" bg-[#150E28] pt-12 pb-32 ">
      <div className=" max-w-7xl mx-auto">
        {/* SECTIONS */}
        <div className=" flex items-end space-x-12">
          {/* LEFT SECTION */}
          <div className=" mb-16">
            <img src={trophy} alt="" srcset="" />
          </div>

          {/* RIGHT SECTION */}

          <div className=" flex flex-col items-center space-y-20 ">
            {/*PRIZES TITLE*/}
            <div>
              <h2 className="text-3xl ">Prizes and </h2>
              <h2 className="text-3xl text-[#D434FE]">Rewards</h2>
              <p>
                Hightlight of the prizes or rewards for winners and <br /> for
                participants
              </p>
            </div>

            {/* MEDAL IMAGE */}

            <div>
              <img src={medals} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
