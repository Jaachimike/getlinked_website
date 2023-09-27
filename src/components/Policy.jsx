import React from "react";
import Shield from "../images/Hero Vector Image.svg";
import Padlock from "../images/08 1.svg";

const Policy = () => {
  return (
    <section className="  font-monteserat bg-[#150E28] pt-12 pb-32 h-screen  ">
      <div className=" max-w-7xl mx-auto">
        {/* SECTIONS */}
        <div className=" flex items-start justify-between">
          {/* LEFT SECTION  */}
          <div>
            {/* HEADER */}
            <div className=" mb-14">
              <h2 className=" text-3xl mb-4">
                Privacy Policy and <br /> <span>Terms</span>
              </h2>

              <p className=" mb-7">Last updated on September 12, 2023</p>

              <p>
                Below are our privacy & policy, which outline a lot of goodies.
                <br /> It's out aim to always take of our participant
              </p>
            </div>

            {/* BODY */}
            <div className=" border-2 border-[#D434FE] flex flex-col pl-16 pr-8 py-10 ">
              <p className=" mb-8">
                At getlinked tech Hackathon 1.0, we value your privacy <br />{" "}
                and are committed to protecting your personal information.{" "}
                <br /> This Privacy Policy outlines how we collect, use,
                disclose, <br /> and safeguard your data when you participate in
                our tech <br /> hackathon event. By participating in our event,
                you consent <br /> to the practices described in this policy.
              </p>

              <h3>Licensing Policy</h3>

              <p className=" mb-5">Here are terms of our Standard License:</p>

              <p className=" mb-5">
                The Standard License grants you a non-exclusive right to <br />
                navigate and register for our event
              </p>

              <p
                className=" mb-5
              "
              >
                You are licensed to use the item available at any free source{" "}
                <br />
                sites, for your project developement
              </p>

              <button className="self-center  w-fit  px-10 py-3  rounded  bg-gradient-to-r from-[#D434FE] to-[#903AFF] ">
                Read More
              </button>
            </div>
          </div>
          {/* RIGHT SECTION  */}
          <div className=" relative">
            <img src={Shield} alt="" />
            <img
              src={Padlock}
              alt=""
              className=" absolute top-[200px] left-[-35px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policy;
