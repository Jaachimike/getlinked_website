import React from "react";
import insta from "../images/footer_images/mdi_instagram.svg";
import twitter from "../images/footer_images/x_logo.svg";
import facebook from "../images/footer_images/fb_logo.svg";
import linkedin from "../images/footer_images/ri_linkedin-fill.svg";

export const Contact = () => {
  return (
    <section className="bg-[#150E28] font-monteserat pt-32 pb-24">
      <div className=" max-w-7xl mx-auto">
        {/* FLEXBOX */}
        <div className=" flex justify-between ">
          {/* left side */}
          <div className=" flex-grow ">
            <div className=" flex flex-col h-full justify-center max-w-[50%] mx-auto space-y-3">
              <h2 className=" text-3xl text-[#D434FE] font-semibold ">
                Get in touch
              </h2>
              <h3>
                Contact <br /> Information
              </h3>

              <p>
                27, Alara Street <br /> Yaba 100012 <br /> Lagos State
              </p>

              <p>Call Us : 07067981819</p>

              <p>
                we are open from Monday-Friday <br /> 08:00am-05:00pm
              </p>

              <p className="text-[#D434FE] pt-7">Share on</p>

              {/* SOCIAL MEDIA LINKS */}

              <div className=" flex space-x-6">
                <img src={insta} alt="" />
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img src={linkedin} alt="" />
              </div>
            </div>
          </div>

          {/*right side */}
          <div className=" bg-slate-800 bg-opacity-10 shadow-lg rounded-xl flex-grow">
            <div className=" max-w-[75%] mx-auto flex flex-col py-16 ">
              <h2 className=" text-[#D434FE] font-semibold mb-2">
                Questions or need assistance?
              </h2>
              <h2 className=" text-[#D434FE] font-semibold mb-8">
                Let us know about it!
              </h2>
              <input
                type="text"
                placeholder="First Name"
                className=" bg-slate-800 bg-opacity-10 border-2 px-6 py-3 placeholder-white rounded-lg mb-9"
              />
              <input
                type="email"
                name=""
                id=""
                className=" bg-slate-800 bg-opacity-10  border-2 px-6 py-3 placeholder-white  rounded-lg mb-9"
                placeholder="Mail"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                className=" bg-slate-800 bg-opacity-10 border-2 placeholder-white px-6 rounded-lg mb-9"
                placeholder="Message"
              ></textarea>

              {/* SUBMIT BUTTON */}
              <div className=" self-center">
                <button
                  type="button"
                  className="px-10 py-3  rounded bg-gradient-to-r from-[#D434FE] to-[#903AFF]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
