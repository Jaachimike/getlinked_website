import React from "react";
import Rules_svg from ".././images/Rules_svg.svg";

const Rules = () => {
  return (
    <section className=" bg-[#150E28] border-solid border-b-[1px] border-white border-opacity-20">
      <div className=" max-w-7xl mx-auto">
        {/* SECTIONS */}
        <div className=" flex">
          {/* LEFT SECTION */}
          <div className=" w-1/2 flex flex-col justify-center items-start ">
            <h2 className=" text-3xl  ">Rules and</h2>
            <h2 className=" mb-5 text-3xl text-[#D434FE]">Guidelines</h2>
            <p>
              Out tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>

          {/* RIGHT SECTION */}

          <div className=" w-1/2">
            <img src={Rules_svg} alt="" srcset="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
