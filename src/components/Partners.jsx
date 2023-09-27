import React from "react";
import liberty_assured from "../images/grid_images/Liberty_assured.svg";
import Paybox from "../images/grid_images/Paybox_logo.svg";
import liberty_pay from "../images/grid_images/Liberty_pay_logo.svg";
import vuzual_plus from "../images/grid_images/Vizual_Plus_logo.svg";
import winwize from "../images/grid_images/Winwise_logo.svg";
import whisper_sms from "../images/grid_images/whisper_logo.svg";

const Partners = () => {
  return (
    <section className="  font-monteserat bg-[#150E28] pt-12 pb-32 border-solid border-b-[1px] border-white border-opacity-20">
      <div className=" max-w-7xl mx-auto">
        {/* SECTIONS */}
        <div className=" flex flex-col items-center">
          {/* HEADER  */}
          <div className=" text-center">
            <h2 className=" text-3xl mb-5">Partners and Sponsors</h2>
            <p className="">
              Getlinked Hackathon 1.0 is honored to have the following major{" "}
              <br /> companies as its partners and sonsors
            </p>
          </div>

          {/* GRID CONTAINER */}
          <div className=" border-2 border-[#D434FE] py-40  w-full h-full flex justify-center items-center">
            {/* GRID  */}

            <div className="grid grid-cols-3 grid-rows-2 gap-3 divide-y divide-gray-400">
              <div className=" w-full h-full flex justify-center items-center">
                <img src={liberty_assured} alt="" srcset="" />
              </div>

              <div className=" w-full h-full flex justify-center items-center  ">
                <img src={liberty_pay} alt="" srcset="" />
              </div>

              <div className=" w-full h-full flex justify-center items-center  ">
                <img src={winwize} alt="" srcset="" />
              </div>

              <div className=" w-full h-full flex justify-center items-center   row-start-2">
                <img src={whisper_sms} alt="" srcset="" />
              </div>

              <div className=" w-full h-full flex justify-center items-center   row-start-2">
                <img src={Paybox} alt="" srcset="" />
              </div>

              <div className=" w-full h-full flex justify-center items-center row-start-2">
                <img src={vuzual_plus} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
